const controller = {}
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    var sql = "SELECT * FROM `customer`";
    conn.query(sql, (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render('customers', {data: customers});
    });
  });
}
controller.save = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) throw err;
    const data = req.body;
    var sql = "INSERT INTO `customer` SET ?";
    conn.query(sql, [data], (err, customers) => {
      if (err) throw err;
      console.log(customers);
      res.redirect('/');
    });
  });
}
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) throw err;
    var sql = "SELECT * FROM `customer` WHERE `id` = ?";
    conn.query(sql, [id], (err, customers) => {
      // console.log(customers[0]);
      res.render('customers_edit', {data: customers[0]});
    });
  });
}
controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    if (err) throw err;
    var sql = "UPDATE `customer` SET ? WHERE `id` = ?";
    conn.query(sql, [newCustomer, id], (err, rows) => {
      if (err) throw err;
      res.redirect('/');
    });
  });
}
controller.delete = (req, res) => {
  // console.log(req.params);
  const { id } = req.params;
  req.getConnection((err, conn) => {
    if (err) throw err;
    var sql = "DELETE FROM `customer` WHERE `id` = ?";
    conn.query(sql, [id], (err, rows) => {
      if (err) throw err;
      res.redirect('/');
    });
  });
}
module.exports = controller;