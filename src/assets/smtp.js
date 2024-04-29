// emailService.js

const EmailService = {
  send: function (data) {
    return new Promise(function (resolve) {
      data.nocache = Math.floor(1e6 * Math.random() + 1);
      data.Action = "Send";
      const requestData = JSON.stringify(data);
      EmailService.ajaxPost(
        "https://smtpjs.com/v3/smtpjs.aspx?",
        requestData,
        function (response) {
          resolve(response);
        }
      );
    });
  },

  ajaxPost: function (url, data, callback) {
    const xhr = EmailService.createCORSRequest("POST", url);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      const response = xhr.responseText;
      callback(response);
    };
    xhr.send(data);
  },

  ajax: function (url, callback) {
    const xhr = EmailService.createCORSRequest("GET", url);
    xhr.onload = function () {
      const response = xhr.responseText;
      callback(response);
    };
    xhr.send();
  },

  createCORSRequest: function (method, url) {
    let xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // Most modern browsers support CORS with XMLHttpRequest
      xhr.open(method, url, true);
    } else {
      // CORS not supported, handle accordingly
      xhr = null;
    }
    return xhr;
  },
};

export default EmailService;
