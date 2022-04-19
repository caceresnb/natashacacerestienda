import {'BsCartFill'} from "@react-icons/all-files/fa/FaBeer";
import {'NavBar'} from "../NavBar/NavBar";

const Content= ({
    icon,
    greeting,
    NavBar,
})=> {
    return (
        <NavBar/>,
        icon= <BsCartFill/>,
        greeting={'Hace tu pedido'},
    )
}
export default Content 