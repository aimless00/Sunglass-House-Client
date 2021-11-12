import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../../AddProduct/AddProduct';
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageAllProducts from '../ManageALlProducts/ManageAllProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const { user, logOut, admin } = useAuth()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <List sx={{ textAlign: 'left', mx: '30px' }}>
                <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to='/home'>Home</Link>
                <li>
                    <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}`}>Dashboard</Link>
                </li>
            </List>
            <Divider />
            <List>
                {admin && <Box sx={{ textAlign: 'left', mx: '30px' }}>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/addProduct`}>Add Product</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/manageOrders`}>Manage All Order</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/manageProducts`}>Manage All Products</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/makeAdmin`}>Make Admin</Link>
                    </li>
                </Box>}
                {!admin && <Box sx={{ textAlign: 'left', mx: '30px', mt: '5px' }}>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/mayOrder`}>My Order</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/payment`}>Payment</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', fontWeight: 'bold' }} to={`${url}/review`}>Review</Link>
                    </li>
                </Box>}
                <div style={{ marginTop: '100px', fontWeight: 'bold' }}>
                    {user.email ? <div>
                        {user?.displayName}
                        <Link to='/login'><Button onClick={logOut} variant='contained'>Log Out</Button></Link>
                    </div> : <Link to='/login'><Button variant='contained'>Login</Button></Link>}
                </div>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/mayOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
