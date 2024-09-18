import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to='/' className="flex items-center hover:text-primary transition-colors">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to='/about' className="flex items-center hover:text-primary transition-colors">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link to='/contect' className="flex items-center hover:text-primary transition-colors">
                    Contect
                </Link>
            </Typography>

        </ul>
    );
}

export function NavbarManu() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="rounded-none  px-20 py-1">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to='/' >
                    <Typography
                        as="a"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        <img src="/src/assets/script.viserlab.com/Viserbus_-_Home/10004.png" width={100} />
                    </Typography>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden lg:flex">
                    <Link to='/ticket'>
                        <Button className="bg-primary">Buy Ticket</Button>
                    </Link>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <div>open</div>

                    ) : (
                        <div>open</div>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}