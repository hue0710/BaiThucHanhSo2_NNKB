import {Box, Chip, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {ProductApi} from "./api/ProductApi";
import "./App.css"
import Slider from "react-slick";
import {convertToVnd} from "./utils/utils";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

function App() {

    const [listTitle, setListTitle] = useState(undefined);
    const [listProduct, setListProduct] = useState(undefined);
    const [listLapTopTitle, setListLapTopTitle] = useState(undefined);
    const [listLapTopProduct, setListLapTopProduct] = useState(undefined);
    const [listDienThoaiTitle, setListDienThoaiTitle] = useState(undefined);
    const [listDienThoaiProduct, setListDienThoaiProduct] = useState(undefined);
    const [listPhuKienProduct, setListPhuKienProduct] = useState(undefined);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const getListTitle = async () => {
        const response = await ProductApi.getListTitle();
        console.log(response);
        setListTitle(response)
    }

    const getListProduct = async () => {
        const response = await ProductApi.getListProduct();
        setListProduct(response);
    }

    const getListLapTopTitle = async () => {
        const response = await ProductApi.getListLapTopTitle();
        console.log(response);
        setListLapTopTitle(response)
    }

    const getListLapTopProduct = async () => {
        const response = await ProductApi.getListLapTopProduct();
        setListLapTopProduct(response);
    }

    const getListDienThoaiTitle = async () => {
        const response = await ProductApi.getListDienThoaiTitle();
        console.log(response);
        setListDienThoaiTitle(response)
    }

    const getListDienThoaiProduct = async () => {
        const response = await ProductApi.getListDienThoaiProduct();
        setListDienThoaiProduct(response);
    }

    const getListPhuKienProduct = async () => {
        const response = await ProductApi.getListPhuKienProduct();
        setListPhuKienProduct(response);
    }

    useEffect(() => {
        getListTitle();
        getListProduct();
        getListLapTopTitle();
        getListLapTopProduct();
        getListDienThoaiTitle();
        getListDienThoaiProduct();
        getListPhuKienProduct();
    }, [])

    return (
        <>
            <section className="header">

            </section>
            <section className="searchbar-menu">

            </section>
            <section className="all">
                <Box className="grid-container">

                    {
                        listTitle ? listTitle.map((value, index) => {
                            let props = null;

                            if (index === 0) props = "item1 grid-item";
                            else props = "grid-item";
                            return <div className={props}>
                                <img src={value.image} alt=""/>
                                <div>
                                    <p>{value.name}</p>
                                    <p>{value.total} s???n ph???m</p>
                                </div>
                            </div>
                        }) : ""
                    }
                </Box>
                <div className="section2">
                    <Slider {...settings}>
                        {
                            listProduct ? listProduct.map((value, index) => {
                                return <div style={{position:'relative', margin:'5px'}}>
                                    <div style={{position:'relative'}}>
                                        <img src={value.image} alt=""/>
                                        {value.giam ? <Chip style={{
                                            backgroundColor:'#FF6801',
                                            color:'white',
                                            fontWeight:'bold',
                                            position:'absolute',
                                            bottom:"1rem"

                                        }} avatar={<LocalFireDepartmentIcon color={"error"}/>}
                                                            label={"Gi???m " + convertToVnd(value.giam)}/> : ""}
                                    </div>

                                    <h3>{value.name}</h3>

                                    <div className={"priceContainer"}>
                                        <h5 className="newPrice">{convertToVnd(value.price)}</h5>
                                        <h5 className="oldPrice">{convertToVnd(value.oldPrice)}</h5>
                                    </div>
                                    {value.km ? <div className={"kmContainer"}>
                                        <div><div className={"km"}>
                                            KM
                                        </div></div>
                                        <p>{value.km}</p>
                                    </div> : ""}
                                    <div className={"listChip"}>
                                        {value.chips ? value.chips.map((value, index) => {
                                            return <div className={"listChipcontainer"}><Chip
                                                style={{backgroundColor: value.color, color: 'white',}}
                                                label={value.title}/></div>
                                        }) : ""}
                                    </div>
                                </div>
                            }) : ""
                        }
                    </Slider>
                </div>
            </section>
            <section className="banner">

            </section>
            <section className="dienthoai">
                <Box className="grid-container">
                    {
                        listDienThoaiTitle ? listDienThoaiTitle.map((value, index) => {
                            let props = "grid-item";
                            return <div className={props}>
                                <img src={value.image} alt=""/>
                                <div>
                                    <p>{value.name}</p>
                                    <p>{value.total} s???n ph???m</p>
                                </div>
                            </div>
                        }) : ""
                    }
                </Box>
                <div className="section2">
                    <Slider {...settings}>
                        {
                            listDienThoaiProduct ? listDienThoaiProduct.map((value, index) => {
                                return <div style={{position:'relative', margin:'5px'}}>
                                    <div style={{position:'relative'}}>
                                        <img src={value.image} alt=""/>
                                        {value.giam ? <Chip style={{
                                            backgroundColor:'#FF6801',
                                            color:'white',
                                            fontWeight:'bold',
                                            position:'absolute',
                                            bottom:"1rem"

                                        }} avatar={<LocalFireDepartmentIcon color={"error"}/>}
                                                            label={"Gi???m " + convertToVnd(value.giam)}/> : ""}
                                    </div>

                                    <h3>{value.name}</h3>

                                    <div className={"priceContainer"}>
                                        <h5 className="newPrice">{convertToVnd(value.price)}</h5>
                                        <h5 className="oldPrice">{convertToVnd(value.oldPrice)}</h5>
                                    </div>
                                    {value.km ? <div className={"kmContainer"}>
                                        <div><div className={"km"}>
                                            KM
                                        </div></div>
                                        <p>{value.km}</p>
                                    </div> : ""}
                                    <div className={"listChip"}>
                                        {value.chips ? value.chips.map((value, index) => {
                                            return <div className={"listChipcontainer"}><Chip
                                                style={{backgroundColor: value.color, color: 'white',}}
                                                label={value.title}/></div>
                                        }) : ""}
                                    </div>
                                </div>
                            }) : ""
                        }
                    </Slider>
                </div>
            </section>
            <section className="laptop">
                <Box className="grid-container">

                    {
                        listLapTopTitle ? listLapTopTitle.map((value, index) => {
                            let props = "grid-item";
                            return <div className={props}>
                                <img src={value.image} alt=""/>
                                <div>
                                    <p>{value.name}</p>
                                    <p>{value.total} s???n ph???m</p>
                                </div>
                            </div>
                        }) : ""
                    }
                </Box>
                <div className="section2">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {
                            listLapTopProduct ? listLapTopProduct.map((value, index) => {
                                return <Grid item xs={2.4}>
                                    <div style={{position:'relative', margin:'5px'}}>
                                        <div style={{position:'relative'}}>
                                            <img src={value.image} alt=""/>
                                            {value.giam ? <Chip style={{
                                                backgroundColor:'#FF6801',
                                                color:'white',
                                                fontWeight:'bold',
                                                position:'absolute',
                                                bottom:"1rem"

                                            }} avatar={<LocalFireDepartmentIcon color={"error"}/>}
                                                                label={"Gi???m " + convertToVnd(value.giam)}/> : ""}
                                        </div>

                                        <h3>{value.name}</h3>

                                        <div className={"priceContainer"}>
                                            <h5 className="newPrice">{convertToVnd(value.price)}</h5>
                                            <h5 className="oldPrice">{convertToVnd(value.oldPrice)}</h5>
                                        </div>
                                        {value.km ? <div className={"kmContainer"}>
                                            <div><div className={"km"}>
                                                KM
                                            </div></div>
                                            <p>{value.km}</p>
                                        </div> : ""}
                                        <div className={"listChip"}>
                                            {value.chips ? value.chips.map((value, index) => {
                                                return <div className={"listChipcontainer"}><Chip
                                                    style={{backgroundColor: value.color, color: 'white',}}
                                                    label={value.title}/></div>
                                            }) : ""}
                                        </div>
                                    </div>
                                </Grid>
                            }) : ""
                        }
                    </Grid>
                </div>
            </section>
            <section className="phukien">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        listPhuKienProduct ? listPhuKienProduct.map((value, index) => {
                            return <Grid item xs={4}>
                                <div style={{position:'relative', margin:'5px', display: 'flex'}}>
                                    <div style={{position:'relative'}}>
                                        <img src={value.image} alt=""/>
                                        {value.giam ? <Chip style={{
                                            backgroundColor:'#FF6801',
                                            color:'white',
                                            fontWeight:'bold',
                                            position:'absolute',
                                            bottom:"1rem",
                                            left:0

                                        }} avatar={<LocalFireDepartmentIcon color={"error"}/>}
                                                            label={"Gi???m " + convertToVnd(value.giam)}/> : ""}
                                    </div>
                                    <div style={{margin: '0'}}>
                                        <h3 >{value.name}</h3>

                                        <div className={"priceContainer"}>
                                            <h5 style={{margin: '0', width:'50%'}} className="newPrice">{convertToVnd(value.price)}</h5>
                                            <h5 style={{margin: '0', width:'50%'}} className="oldPrice">{convertToVnd(value.oldPrice)}</h5>
                                        </div>
                                        {value.km ? <div className={"kmContainer"}>
                                            <div><div className={"km"}>
                                                KM
                                            </div></div>
                                            <p>{value.km}</p>
                                        </div> : ""}
                                        <div className={"listChip"}>
                                            {value.chips ? value.chips.map((value, index) => {
                                                return <div className={"listChipcontainer"}><Chip
                                                    style={{backgroundColor: value.color, color: 'white',}}
                                                    label={value.title}/></div>
                                            }) : ""}
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        }) : ""
                    }
                </Grid>
            </section>
            <section className="footer">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <div>
                            <div className="title">Th??ng tin li??n h???</div>
                            <p>?????a ch???: 70 Lu Gia, Ward 15, District 11, Ho Chi Minh City</p>
                            <p>??i???n tho???i: 1900 6750</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <div className="title">Th??ng tin kh??c</div>
                            <p>Quy ch??? ho???t ?????ng</p>
                            <p>Ch??nh s??ch B???o h??nh</p>
                            <p>Li??n h??? h???p t??c kinh doanh</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <div className="title">H??? tr??? kh??ch h??ng</div>
                            <p>Mua h??ng v?? thanh to??n Online</p>
                            <p>Mua h??ng tr??? g??p Online</p>
                            <p>Tra th??ng tin ????n h??ng</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <div className="title">G???i t?? v???n & khi???u n???i</div>
                            <p>G???i mua h??ng: <div className="mark">1800.1800</div> (8h00 - 22h00)</p>
                            <p>G???i khi???u n???i: <div className="mark">1800.1800</div> (8h00 - 22h00)</p>
                            <p>G???i b???o h??nh: <div className="mark">1800.1800</div> (8h00 - 22h00)</p>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>


    );
}

export default App;
