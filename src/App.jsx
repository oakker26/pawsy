import './App.css'
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import TeamPage from './Pages/TeamPage/TeamPage';
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactPage/ContactPage';
import MitchellTorphy from './NestedPages/MemberNestedPage/MitchellTorphy/ MitchellTorphy';
import AllisonWillis from './NestedPages/MemberNestedPage/AllisonWillis/AllisonWillis';
import AnneJacobs from './NestedPages/MemberNestedPage/AnneJacobs/AnneJacobs';
import BethLeonard from './NestedPages/MemberNestedPage/BethLeonard/BethLeonard';
import CaroleMurphy from './NestedPages/MemberNestedPage/CaroleMurphy/CaroleMurphy';
import GuyElliott from './NestedPages/MemberNestedPage/GuyElliott/GuyElliott';
import ValerieBell from './NestedPages/MemberNestedPage/ValerieBell/ValerieBell';
import ProductOne from './NestedPages/ProductNestedPage/ProductOne/ProductOne';
import ProductTwo from './NestedPages/ProductNestedPage/ProductTwo/ProductTwo';
import ProductThree from './NestedPages/ProductNestedPage/ProductThree/ProductThree';
import ProductFour from './NestedPages/ProductNestedPage/ProductFour/ProductFour';
import Grooming from './NestedPages/BlogNestedPage/Grooming/Grooming';
import HealthOne from './NestedPages/BlogNestedPage/HealthOne/HealthOne';
import HealthTwo from './NestedPages/BlogNestedPage/HealthTwo/HealthTwo';
import TrainingOne from './NestedPages/BlogNestedPage/TrainingOne/TrainingOne';
import TrainingTwo from './NestedPages/BlogNestedPage/TrainingTwo/TrainingTwo';
import DentalCare from './Services/DentalCare/DentalCare'
import SurgicalService from './Services/SurgicalService/SurgicalService'
import PetHostel from './Services/PetHostel/PetHostel'
import GroomingService from './Services/GroomingService/GroomingService';
import {BrowserRouter,Routes,Route ,useLocation} from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ScrollToTop from './ScrollToTop';
import ProductNestedPage from './NestedPages/ProductNestedPage/ProductNestedPage';
import Post from './NestedPages/BlogNestedPage/Post';
import MemberNestedPge from './NestedPages/MemberNestedPage/MemberNestedPge';
import { AnimatePresence } from 'framer-motion';
import ShareLayOut from './ShareLayOut';
import { calculateTotal } from './feature/cart/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init()
function App() {
  const location = useLocation()
  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  },cartItems)
  return (<>
        <ScrollToTop/>
<AnimatePresence exitBeforeEnter >
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<ShareLayOut/>}>
        <Route index exact element={<HomePage />}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='products' element={<ProductPage />}></Route>
        <Route path='/product' element={<ProductNestedPage/>}>
        <Route path='productone' element={<ProductOne/>} />
          <Route path='producttwo' element={<ProductTwo />} />
        <Route path='productthree' element={<ProductThree/>} />
        <Route path='productfour' element={<ProductFour/>} />  
        </Route>
        <Route path='post' reload element={<Post/>}>
        <Route path='grooming' element={<Grooming/>} />
          <Route path='healthone' element={<HealthOne />} />
        <Route path='healthtwo' element={<HealthTwo/>} />
        <Route path='trainingone' element={<TrainingOne/>} />
        <Route path='trainingtwo' element={<TrainingTwo/>} />
        </Route>
        <Route path='/team' element={<MemberNestedPge/>}>
        <Route path='mitchelltorphy' element={<MitchellTorphy/> } />
        <Route path='allisonwillis' element={<AllisonWillis/> } />
        <Route path='annejacobs' element={<AnneJacobs/> } />
        <Route path='bethleonard' element={<BethLeonard/> } />
        <Route path='carolemurphy' element={<CaroleMurphy/> } />
        <Route path='guyelliott' element={<GuyElliott/> } />
        <Route path='mitchelltorphy' element={<MitchellTorphy/> } />
        <Route path='valeriebell' element={<ValerieBell/> } />
        </Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='services/grooming' element={<GroomingService/>}></Route>
        <Route path='services/dentalcare' element={<DentalCare />}></Route>
        <Route path='services/surgicalservice' element={<SurgicalService />}></Route>
        <Route path='services/pethostel' element={<PetHostel />}></Route>
        </Route>
      
        <Route path='*' element={<ErrorPage />}></Route>
        
      </Routes>
      </AnimatePresence>
     
      {/* <BlogPage /> */}
      {/* <ContactPage />   */}
      {/* <MitchellTorphy/> */}
      {/* <AllisonWillis/> */}
      {/* <AnneJacobs/> */}
      {/* <BethLeonard/> */}
      {/* <CaroleMurphy/> */}
      {/* <GuyElliott/> */}
      {/* <ValerieBell/> */}
      {/* <ProductOne /> */}
      {/* <ProductTwo/> */}
      {/* <ProductThree/> */}
      {/* <ProductFour /> */}
      {/* <HealthOne/> */}
      {/* <HealthTwo/> */}
      {/* <TrainingOne/> */}
      {/* <TrainingTwo/> */}
      
</>   
  )
}

export default App
