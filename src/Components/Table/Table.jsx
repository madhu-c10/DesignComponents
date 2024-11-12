import React from 'react';
import styles from './Table.module.css';
import { tableArrowRight, userImage } from '../../Assets/ImagePath';

const Table = () => {

    const tableTh = ['#','Project Name','PM','Status','Last update','Resources','Project timeline','Estimation'];
    const tableData = [
        {
            id:1,
            projectName:'Allosaurus web app',
            userImage:userImage,
            status:'On track',
            lastUpdate:'15 Mar 2021, 12:47 PM',
            resourses:3,
            projectTimeLineFrom:'15 May 2021',
            projectTimeLineTo:'15 May 2021',
            estimation:'US$ 10.5k'
        }
    ]

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.tableComponent}>
          <thead className={styles.table_Thead}>
            <tr>
                <th><input type='checkbox'/></th>
                {
                    tableTh.map((items,i)=>{
                        return(
                           <th className={styles.tableHead} key={i}>{items}</th> 
                        )
                    })
                }
            </tr>
          </thead>
          <tbody>
            {
                tableData.map((datas,i)=>{
                    return(
                       <tr className={styles.tableDataRow} key={i}>
                         <td>
                            <div className={styles.tableDataInputAction}>
                                <input type='checkbox'/>
                                <img src={tableArrowRight}/>
                            </div>
                         </td>
                         <td><span className={styles.tableId}>{datas.id}</span></td>
                         <td><span className={styles.projectName}>{datas.projectName}</span></td>
                         <td><img src={datas.userImage}/></td>
                         <td><div className={styles.tableStatus}>
                            <div className={styles.statusActive}></div>
                            <span className={styles.activeSpan}>{datas.status}</span>
                            </div></td>
                       </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table