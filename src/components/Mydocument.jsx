examples.multiple = function () {
  var doc = new jsPDF()
  doc.text('Multiple tables', 14, 20)

  doc.autoTable({ startY: 30, head: headRows(), body: bodyRows(25) })

  var pageNumber = doc.internal.getNumberOfPages()

  doc.autoTable({
    columns: [
      { dataKey: 'id', header: 'ID' },
      { dataKey: 'name', header: 'Name' },
      { dataKey: 'expenses', header: 'Sum' },
    ],
    body: bodyRows(15),
    startY: 240,
    showHead: 'firstPage',
    styles: { overflow: 'hidden' },
    margin: { right: 107 },
  })

  doc.setPage(pageNumber)

  doc.autoTable({
    columns: [
      { dataKey: 'id', header: 'ID' },
      { dataKey: 'name', header: 'Name' },
      { dataKey: 'expenses', header: 'Sum' },
    ],
    body: bodyRows(15),
    startY: 240,
    showHead: 'firstPage',
    styles: { overflow: 'hidden' },
    margin: { left: 107 },
  })

  for (var j = 0; j < 3; j++) {
    doc.autoTable({
      head: headRows(),
      body: bodyRows(),
      startY: doc.lastAutoTable.finalY + 10,
      pageBreak: 'avoid',
    })
  }

  return doc
}
