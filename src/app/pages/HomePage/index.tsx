import Banner from 'app/components/Banner/Banner';
import Footer from 'app/components/Footer/Footer';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
export function HomePage() {
  // useEffect(() => {
  //   cityApi.getAll().then(res => {
  //     res.data.map(x => console.log(x));
  //   });
  // }, []);
  // const [user, setUser] = useState({
  //   name: '',
  // });
  // const data = useSelector((state: RootState) => state.user.user);
  // const dispatch = useDispatch();
  // const renderUser = data.map(item => {
  //   return <li key={item.id}>{item.name}</li>;
  // });
  // const handleValue = (e: object | any) => {
  //   setUser({ ...user, name: e.target.value });
  // };
  // const handleClick = () => {
  //   dispatch(addUser(user));
  // };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Banner />
      <Footer />
    </>
  );
}
