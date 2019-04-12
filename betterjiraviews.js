//https://cdn.jsdelivr.net/gh/BinaryRulez/BetterJiraViews/betterjiraviews.js
//https://raw.githack.com/BinaryRulez/BetterJiraViews/master/betterjiraviews.js

getResource(ext_jira_base_url + "/rest/api/2/search?jql=filter=91860", function(obj) {
    txt = ""
    obj.issues.forEach(function(element) {
        txt = txt + "<a href='" + ext_jira_base_url + "/browse/" + element.key + "'>" + element.key + "</a>" + "<br>"
    })
    document.getElementById("feature1").innerHTML = txt;
});

function getResource(url, callback) {

    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic '
        + window.btoa(unescape(encodeURIComponent(ext_user + ":" + ext_user))));

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        credentials: 'include'
    };
    fetch(ext_confluence_url + url, myInit)
        .then(function(response) {
            console.log("response=");
            console.log(response);
            return response.text();
        })
        .then(function(text) {
            console.log("json=" + text);

            var obj = JSON.parse(text);
            console.log(obj);
            callback(obj);

            //return obj;
            //document.getElementById("content").innerHTML = obj.fields.summary;
        });
}