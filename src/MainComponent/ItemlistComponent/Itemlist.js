import './Itemlist.css';

function Itemlist({items, setItems}){
    return (
        items.map(item =>(
            <div className='d-flex gap-2 mx-2'>
                 <div style={{ width: '265px', textAlign: 'left'}}>{item.description}</div>
                 <div style={{ width: '100px'}}>{item.code}</div>
                 <div>{item.count}</div>
                 <div>{item.brutto}</div>
                 <div>{item.summa}</div>
                 <div>{item.usd}</div>
                 <div>{item.pk}</div>
                 <div>{item.container}</div>
            </div>
        ))
    )
}

export default Itemlist;