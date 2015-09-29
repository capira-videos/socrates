Capira.DrawTools = {
    'pen': {
        mouseDown: function(event, dc) {
            this.points = [];
            this.points.push(dc._getPos(event));
            dc.addPath(this.points);
        },
        mouseUp: function(event, dc) {
            dc.history.push({action: 'line'})
        },
        mouseMove: function(event, dc) {
            var p = dc._getPos(event);
            var last = this.points[this.points.length - 1];
            if(dc._dist(p, last) > dc.minDist) {
                this.points.push(p);
                dc._smoothingFn(this.points);
                dc._drawLines();
            }
        }
    },
    'line': {
        mouseDown: function(event, dc) {
            this.startPoint = dc._getPos(event);
            this.points = [this.startPoint, this.startPoint];
            dc.addPath(this.points);
        },
        mouseUp: function(event, dc) {
            dc.history.push({action: 'line'});
        },
        mouseMove: function(event, dc) {
            this.points[1] = dc._getPos(event);
            dc._drawLines();
        }
    },
    'eraser': {
        mouseMove: function(event, dc) {
            var eps = 4;
            var scaling_factor = 10;

            var q = dc._getPos(event);

            // iterate over each line backwards, and delete the first line
            // where the clicked point intersects

            for(var i=dc.paths.length - 1; i >= 0; i--) {
                if(dc.paths[i].color != dc.color) {
                    continue;
                }
                var points = dc.paths[i].points;
                var p0 = points[0];
                var p1 = null;

                for(var j=1; j<points.length; j++) {
                    p1 = points[j];
                    var crossprod = ((p1.x - p0.x) * (q.y - p0.y)) - ((q.x - p0.x) * (p1.y - p0.y));
                    var withinX = Math.min(p0.x, p1.x) - eps <= q.x && Math.max(p0.x, p1.x) + eps >= q.x;
                    var withinY = Math.min(p0.y, p1.y) - eps <= q.y && Math.max(p0.y, p1.y) + eps >= q.y;

                    var threshold = dc._dist(p0, p1)/scaling_factor;

                    if(crossprod < threshold && withinX && withinY) {
                        var removed = dc.paths.splice(i, 1);
                        dc.history.push({action: 'remove', removed: removed});
                        dc._drawLines();
                        return;
                    }
                    p0 = p1;
                }
            }
        },
        mouseUp: function(event, dc) { },
        mouseDown: function(event, dc) {
            this.mouseMove(event, dc);
        }
    }
}