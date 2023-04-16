import './Header.css';

function Header(){
    return(
        <div className='d-flex justify-content-center'>
            <div className="Header">
                <h1 className='mx-5'>zhyldam-td</h1>
                <div className='Header-Buttons mx-3'>
                    <button>Import Excel</button>
                    <button>Export XML</button>
                </div>
            </div>
        </div>
    )
}

export default Header;