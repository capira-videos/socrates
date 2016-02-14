# Installation 
- Make sure you have installed `node`, `npm` and `mongodb`.
- Save this folder anywhere on your system
- Open `dist/server/config.js` in a Text Editor and set your `consumerKey` and your `consumerSecret`.
- If you want to use SSL, add the path to your public key and certificate to `dist/server/config.js`
- Run `npm start` from the root directory to install the dependencies and start the Capira Server

# Integrate Capira into your Learning Management System
Capira uses the [LTI Standard](https://www.imsglobal.org/activity/learning-tools-interoperability) to connect with your LMS.

- Your Launch-URL is the root URL of your Capira Server (i.e. https://my-capira-server.com/)
- LTI uses a Key and Secret for authentication of your LMS. You can configure them in your `config.js`

### Moodle
- [Moodle 3.0](https://docs.moodle.org/30/en/External_tool_settings)
- [Moodle 2.2](https://docs.moodle.org/22/en/External_tool_settings)
