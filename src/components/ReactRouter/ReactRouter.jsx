import { useEffect } from "react"
import { Link, Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom"

export const ReactRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} >  // ------------------ Вкладені маршрутиц
                    <Route path="mission" element={<Mission />} />
                    <Route path="team" element={<Team/>} />
                </Route>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductsDetail />} /> //----------URL пареметри
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    )
}


const ReactLink = () => {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/products" >Products</Link>
        </nav>
    )
}

 //----------------- Відрізняєть від Link тим, що можна стилізувати
const ReactNavLink = () => {        
    return (
        <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/products" >Products</NavLink>
        </nav>
    )
}
// ----------------- Повертає об'єкт з усіма динамічними параметрами, які є в поточному URL, щоб отримати значення динамічног параметру використовують ідентифікатор продукту,  хук useParams 
const UseParams = () => {
    const { productId } = useParams();
    return (
        <div>
            Now showing products with id - {productId}
        </div>
    )
}
// _____----___ Якщо поточний URL в адресному рядку браузера збігається зі значенням пропсу path вкладеного маршруту, <Outlet> відрендерить його компонент, інакше він рендерить null та не впливає на розмітку батьківського компонента.
const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <ul>
                <li>
                    <Link to="mission">Read about our massion</Link>
                </li>
                <li>
                    <Link to="team" >Get to know the team</Link>
                </li>

            </ul>
            <Outlet/>  
        </div>
    );
}

const UseNavigate = () => {
    const navigate = useNavigate(); // ----- – для редіректу після дії (натискання кнопки, відправки форми, запиту).

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", { replace: true }) //---  перезаписує поточну URL-сторінку в історії браузера, щоб користувач не міг повернутися назад.
        }, 3000);
        return () => clearTimeout(timer);
    },[navigate])
    return (
        <h1>Page NotFound 404. Return to the main page.... </h1>
    )
}
// ------------------ Редірект при відсутності доступу
import { useUser } from "../context/UserContext";
const DashBoard = () => {
    const { isLogIn } = useUser(); // ---  використовуємо контекст
    if (!isLogIn) {
        return <Navigate to="/login" replace /> // ------------ для редіректу під час рендеру (захист сторінок, автоматичний перехід)
    }
    return (
        <h1>Welcome to your personal account</h1>
    )
}
// ------ useEffect() + useNavigate()
const Dashboard = () => {
    const { isLogIn } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogIn) {
            navigate("/login", {replace: true})
        }
    }, [isLogIn, navigate])
    return (
        <h1>Welcome to your personal account</h1>  
    )
}