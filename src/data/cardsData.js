import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
} from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Analytics Cards Data
export const cardsData = [
    {
        id:1,
        title: "Pasado",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "10",
        png: UilUsdSquare,
        series: [
            {
                name: "Pasado",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        id:2,
        title: "Presente",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "2",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Presente",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        id:3,
        title: "Pendiente",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "15",
        png: UilClipboardAlt,
        series: [
            {
                name: "Pendiente",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];