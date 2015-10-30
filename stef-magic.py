import os
import sys
import re

walk_dir = sys.argv[1]

print('walk_dir = ' + walk_dir)

# If your current working directory may change during script execution, it's recommended to
# immediately convert program arguments to an absolute path. Then the variable root below will
# be an absolute path as well. Example:
# walk_dir = os.path.abspath(walk_dir)
print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

for root, subdirs, files in os.walk(walk_dir):

    for file_name in files:
    	file_path = os.path.join(root, file_name)
    	prefix = '"' + re.sub('[^\/]+', '..', file_path)[3:] + '/bower_components'

    	with open(file_path, 'r') as f:
	    	lines = f.readlines()

    	with open(file_path, 'w') as f:
    		for line in lines:
    			f.write(re.sub('"/bower_components', prefix, line))