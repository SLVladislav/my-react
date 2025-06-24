import { useEffect, useState } from "react"
import { Link, Navigate, Outlet, Route, Routes, useNavigate, useParams, useSearchParams } from "react-router-dom"

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

const SerachParams = () => {   //----------Вилучення параметрів
    const [serachParams] = useSearchParams();

    const name = serachParams.get("name");
    const color = serachParams.get("color");
    const maxPrice = serachParams.get("maxPrice");

    return (
        <div>
            <p>Name: {name}</p>
            <p>Color:{color}</p>
            <p>Maximum price: {maxPrice}</p>
        </div>
    );
} 

const UpdateSingleParams = () => {
    const [serachParams, setSearchParams] = useSearchParams();
    const name = serachParams.get("name"); //----збереження назви продукту під час пошуку.

    const updateSearchParams = (key, value) => {
        //----оновлення ключа
        const updateParams = new URLSearchParams(serachParams);
        // ---Оновлюємо певний ключ
        updateParams.set(key, value);
        //------Застосовуємо зміни до URL
        setSearchParams(updateParams);
    };
    return (
        <div>
            <h1>Products</h1>
            <input type="text" value={name} onChange={e => updateSearchParams("name", e.target.value)} />
            <h2>Оновлення одного параметра в URL</h2>
            <p>Поточні параметри:</p>
            <pre>{serachParams.toString()}</pre>

            <button onClick={() => updateSearchParams('name', 'snickers')}>
                Змінити name на snickers
            </button>
            <button onClick={() => updateSearchParams('maxPrice', 800)}>
                Змінити maxPrice на 800
            </button>
            <button onClick={() => updateSearchParams('inStock', false)}>
                Змінити inStock на false
            </button>
        </div>
    );
}

//----Відстеження змін
const ChangeUser = () => {
    const [user, setUser] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const username = searchParams.het("username");
    
    useEffect(() => {
        // Тут виконуємо асинхронну операцію,
        // наприклад HTTP-запит за інформацією про користувача
        if (username === "") return;

        FakeAPI.getUser(username).then(setUser);
    }, [username]);

    const updateSearchParams = (key, value) => {
        const updateParams = new URLSearchParams(searchParams);
        updateParams.set(key, value);
        setSearchParams(updateParams);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        updateSearchParams("username", form.elements.username.value);
        form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username"/>
                <button type="submit">Search</button>
            </form>
            {user && <UserInfo user={user}/>}
        </>
    )
}

// ----- Об'єкт місцезнаходження Хук useLocation

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Analytics from "path/to/analytics-service";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    Analytics.send(location);
  }, [location]);

  return <div>...</div>;
};


const Products = () => {
    const location = useLocation();
  
    return (
      <Link to="/product/h-1" state={location}>
        Navigate to product h-1
      </Link>
    );
  };
  
  const ProductDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state ?? "/products";
  
    return <Link to={backLinkHref}>Back to products</Link>;
};
  
// -------React.lazy() --відповідає за асинхронне завантаження компонента та React.Suspense --призупиняє його відображення до завершення завантаження.
import { lazy, Suspense } from "react";

const MyComponent = lazy(() => import("path/to/MyComponent"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/some-path" element={<MyComponent />} />
        {/* Інші маршрути */}
      </Routes>
    </Suspense>
  );
};