import * as React from 'react';
import * as XLSX from 'xlsx';

import './excel.css';
import {ExcelFile} from '../comm/constants.js';
import Reference from '../comm/reference.jsx';

export default function Excel() {
  const [excel, setExcel] = React.useState(null);

  const file =  ExcelFile;

  React.useEffect(() => {
    fetch(file).then((res) => res.arrayBuffer())
     .then((ab) => {
       const wb        = XLSX.read(ab, { type: "array" });

       let sheetname = wb.SheetNames[0];
       let ws        = wb.Sheets[sheetname];
       let json      = XLSX.utils.sheet_to_json(ws,{header: 1,defval:''});
       setExcel(json);
     });
  }, []);

  const excelValue = React.useMemo(() => ({
    excel
  }), [excel]);

  console.log(excel);

  return(
      <div className='excel'>
        <table id="customers">
          <tr>
            <th>Text</th>
            <th>Value</th>
          </tr>
          {
            excel && excel.map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
              </tr>
              )
            )
          }
        </table>
        <Reference
          title='Table Style Reference:'
          urlname='W3Schools: CSS Tables'
          url='https://www.w3schools.com/css/css_table.asp'
        />

      </div>
  )
}
