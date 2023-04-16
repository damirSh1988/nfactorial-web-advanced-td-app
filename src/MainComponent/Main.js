import './Main.css';
import { v4 as uuid } from "uuid";
import { useState } from 'react';
import Itemlist from './ItemlistComponent/Itemlist';
import MaterialTable from '@material-table/core';
import { red } from '@mui/material/colors';




const columns = [
    {title: 'Наименование', field: 'description'},
    {title: 'ТНВЭД', field: 'code'},
    {title: 'Количество мест', field:'count'},
    {title: 'Вес брутто', field: 'brutto'},
    {title: 'Стоимость', field: 'summa'},
    {title: 'Валюта', field: 'usd'},
    {title: 'Упаковка', field: 'pk'},
    {title: 'Контейнер', field: 'container'}


]

function Main(){
    const [data, setData] = useState([{
        id : uuid(),
        description: 'Игрушки',
        code: 950300,
        count: 1234,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки2',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
    {
        id : uuid(),
        description: 'Игрушки1',
        code: 950300,
        count: 23,
        brutto: 12000,
        summa: 15400,
        usd: 'USD',
        pk: 'PK',
        container: 'TBJU3456765'

    },
 ]);
    const [valueDescription, setValueDescription] = useState("");
    const [valueCode, setValueCode] = useState("");
    const [valueCount, setValueCount] = useState("");
    const [valueBrutto, setValueBrutto] = useState("");
    const [valueSumma, setValueSumma] = useState("");
    const [valueUsd, setValueUsd] = useState("");
    const [valuePk, setValuePk] = useState("");
    const [valueContainer, setValueContainer] = useState("");
    

    const handleDescriptionAdd = (e) =>{
        setValueDescription(e.target.value);   
    }
    const handleCodeAdd = (e) =>{
        setValueCode(e.target.value);  
    }
    const handleCountAdd = (e) =>{
        setValueCount(e.target.value);   
    }
    const handleBruttoAdd = (e) =>{
        setValueBrutto(e.target.value);  
    }
    const handleSummaAdd = (e) =>{
        setValueSumma(e.target.value);
    }
    const handleUsdAdd = (e) =>{
        setValueUsd(e.target.value);   
    }
    const handlePkAdd = (e) =>{
        setValuePk(e.target.value);   
    }
    const handleContainerAdd = (e) =>{
        setValueContainer(e.target.value);
    }

        
    const handleSubmit = () => {
         const newData = {
            id : uuid(),
            description: valueDescription,
            code: valueCode,
            count: valueCount,
            brutto: valueBrutto,
            summa: valueSumma,
            usd: valueUsd,
            pk: valuePk,
            container: valueContainer
         }
         setData([...data, newData]);
    }


    return(
        <div className="Form-1">
            <div className='Form-2' style={{ width: '90%', height: '680px', backgroundColor:'#3e63e7', borderRadius:'25px'}}>
           
                <div className='Editor'>
                    <input value = {valueDescription} onChange = {handleDescriptionAdd} className='Input' placeholder='Наименование товара'/>
                    <input value = {valueCode} onChange = {handleCodeAdd} className='Input' placeholder='Код ТНВЭД товара'/>
                    <input value = {valueCount} onChange = {handleCountAdd} className='Input' placeholder='Количество мест'/>
                    <input value = {valueBrutto} onChange = {handleBruttoAdd} className='Input' placeholder='Вес брутто'/>
                    <input value = {valueSumma} onChange = {handleSummaAdd} className='Input' placeholder='Стоимость'/>
                    <input value = {valueUsd} onChange = {handleUsdAdd} className='Input' placeholder='Валюта'/>
                    <input value = {valuePk} onChange = {handlePkAdd} className='Input' placeholder='Тип упаковки'/>
                    <input value = {valueContainer} onChange = {handleContainerAdd} className='Input' placeholder='Контейнер'/>
                    <button onClick={handleSubmit} className='Editor-Button'>Добавить</button>
                    <button className='Editor-Button'>Очистить</button>
                    <button className='Editor-Button'>Сортировать</button>
                </div>
                <div className='Grid'>
                    
                    <MaterialTable columns = {columns} data = {data}  title={""} style={{  }} 
                    options={{search:false, headerStyle: {
                                            backgroundColor: '#FFF',
                                            color: '#01579b',
                                            position: 'sticky',
                                            borderColor: '#01579b',
                                         
                                            
                    }, paging: false, maxBodyHeight: 535, toolbar:false, }}
                    editable={{onRowAdd: newData =>
                          new Promise((resolve, reject) => {
                          setTimeout(() => {
                          setData([...data, newData]);  
                          resolve();
                          }, 1000)
                        })}}
                    />
                </div>
                
            </div>
        </div>
 
        
    )
}

export default Main;