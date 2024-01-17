import {useState } from 'react';
import Papa from 'papaparse';
import { set } from 'firebase/database';

const Emailer = () => {
    var jsZip = require('jszip')

    const [csvData, setCsvData] = useState([]);
    const[error, setError] = useState(false);
    const [file, setFile] = useState(null);

    const handleCSVFileUpload = (e) =>{
        setError(false);
        console.log("workimg");
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete:  (results) => {
              console.log(results.data)
              setCsvData(results.data);
            },
          });
    }

    const handleZIPUpload = (e) => {
        console.log("zipapp")
        jsZip.loadAsync(e.target.files[0]).then(function (zip) {
            console.log("zipapp2")
            Object.keys(zip.files).forEach(function (filename) {
                console.log(filename)

            })
          })
    }


    return (
        <div className="flex min-h-screen flex-col p-24">
            <p className="text-center text-lg">PaySheet Sender - Salary Department</p>
            <p className="text-center text-lg">University of Moratuwa</p>
            <div className="container w-full h-[600px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                <input
                    type="file"
                    name="file"
                    accept=".csv"
                    onChange={handleCSVFileUpload}
                    className='block my-10 mx-auto w-[80%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'/>
                 

                <input
                    type="file"
                    name="file"
                    accept=".zip"
                    onChange={handleZIPUpload}
                    className="block mx-auto my-10 w-[80%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"/>
                 
                 </div>



        </div>
    );
    }

export default Emailer;