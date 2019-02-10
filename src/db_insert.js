var args = [];

process.argv.forEach((val, index) => {
  args.push(toLowerCase(val));
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "112358F1B!",
  database: "textbooks"
});

// First: search bar, second: filter1, third: filter2, etc.

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

if (args.length == 1) {
  var keywords = args[0].split(" ", args[0].length);
  var sql = "select * from textbooks.textbooks";
  for (i = 0; i < keywords.length; i++) {
    if (keywords[i] == "and") {
      sql.concat(" and");
    }
    else {
      var like = '%' + keywords[i] + '%';
      sql.concat(" where PostName like " + like + " or");
    }
  }
  sql.slice(0, sql.length - 4);
  sql.concat(';');
  con.query(sql, function (err, result) {
    if (err) throw err;
    // handle error in front end by saying invalid search
    // and specifying correct format of search
    console.log("1 record inserted");
  });
}
