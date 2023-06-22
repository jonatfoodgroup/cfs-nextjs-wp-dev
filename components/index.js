import BuyOnline from "./BuyOnline"
import ActionGroup from "./ActionGroup"
import BrandSelector from "./BrandSelector"
import Brands from "./Brands"
import Follow from "./Follow"
import Section from "./Section"
import Header from "./Header"
import Footer from "./Footer"
import Print from "./Print"
import NightSwitch from "./Nightswitch"
import Share from "./Share"
import Favorite from "./Favorite"
import CompanyLogo from "./CompanyLogo"

const modules = [
  {
    name: 'Follow',
    isGlobal: true,
    component: <Follow />,
  },
  {
    name: 'Buy Online',
    isGlobal: true,
    component: <BuyOnline />,
  },
  {
    name: 'Action Group',
    isGlobal: true,
    component: <ActionGroup />, 
  },
  {
    name: 'Brand Selector',
    isGlobal: true,
    component: <BrandSelector />,
  },
  {
    name: 'Brands',
    isGlobal: true,
    component: <Brands />,
  },
  {
    name: 'Section',
    isGlobal: false,
    component: <Section />,
  },
  {
    name: 'Header',
    isGlobal: true,
    component: <Header />,
  },
  {
    name: 'Footer',
    isGlobal: true,
    component: <Footer />,
  },
  {
    name: 'Print',
    isGlobal: true,
    component: <Print />,
  },
  {
    name: 'Night Switch',
    isGlobal: true,
    component: <NightSwitch />,
  },
  {
    name: 'Share',
    isGlobal: true,
    component: <Share />,
  },
  {
    name: 'Favorite',
    isGlobal: true,
    component: <Favorite />,
  },
  {
    name: 'Company Logo',
    isGlobal: true,
    component: <CompanyLogo />,
  },
]

export default modules