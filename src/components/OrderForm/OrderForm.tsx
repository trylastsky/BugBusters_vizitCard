import "./OrderForm.css"


interface OrderFormProps {
    setToggleOrderForm: (x:boolean) => void;
}

const OrderForm:React.FC<OrderFormProps> = ({setToggleOrderForm}) => {

    return(<>
        <div className="order-form">
        <div className="order">
            <button onClick={() => setToggleOrderForm(false)}><img/></button>
            </div>
        </div>
    </>);
}

export default OrderForm;