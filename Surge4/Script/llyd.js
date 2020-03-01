/*
@supported 9E1BBA07A0EF
[MITM]
hostname = vira.llsapp.com

[Script]
http-response ^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) requires-body=1,script-path=https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Script/llyd.js
*/

var url = $request.url;
var obj = $response.body;
if (!obj) {
  body = {};
} else {
  body = JSON.parse(obj);

  const vip = "/api/v2/readings/limitation";
  const time = "/api/v2/readings/accessible";

  if (url.indexOf(vip) != -1) {
    body["modules"] = [];
    body["auditionDuration"] = 7200;
  }

  if (url.indexOf(time) != -1) {
    body["from"] = 1482071586;
    body["to"] = 1671373986;
  }
}

$done({ body: JSON.stringify(body) });
