/*
康思数独app

[Script]
http-response ^https?://mobile\.conceptispuzzles\.com/catalog_ios/SudokuV2 requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Script/ConceptisSudoku.js
*/

var obj = "<key>Free</key>\r\n\t\t\t\t<true />\r\n\t\t\t\t<key>Info</key>";

body = $response.body
  .replace(/(<key>Free<\/key>\r\n\t\t\t\t<true \/>\r\n\t\t\t\t)/g, "")
  .replace(/<key>Info<\/key>/g, obj);

$done({ body });
