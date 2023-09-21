import Budget from "~/pages/MySpace/Budget"
import Explore from "~/pages/Explore"
import ExplorePublic from "~/pages/ExplorePublic"
import Login from "~/pages/Login"
import MySpace from "~/pages/MySpace"
import Operation from "~/pages/MySpace/Operation"
import PassportNFT from "~/pages/PassportNFT"
import Report from "~/pages/MySpace/Report"
import SharedReport from "~/pages/MySpace/SharedReport"
import Transaction from "~/pages/MySpace/Transaction"
export const publicRoute = [
    {path: '/', element: ExplorePublic},
    {path: '/log-in', element: Login}
]
export const privateRoute = [
    {path: '/explore',element:Explore},
    {path: '/passport-nft',element:PassportNFT},
    {path: '/my-space',element:MySpace},
    {path: '/my-space/operation',element:Operation},
    {path: '/my-space/budget',element:Budget},
    {path: '/my-space/report',element:Report},
    {path: '/my-space/shared-report',element:SharedReport},
    {path: '/my-space/transaction',element:Transaction},
]