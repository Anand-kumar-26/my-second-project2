import './App.css';
import React from 'react'
import MainHeader1 from './Components/MainHeader1';
import MainHeader from './Components/MainHeader';
import List from './Components/List';
import Parts from './Components/Parts';
import Devices from './Components/Devices';
import Accessories from './Components/Accessories';
import BuyBack from './Components/BuyBack';
import PageChange from './Components/PageChange';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      producttype: null,
      star: null,
      brand: null,
      color: null,
      view: true,
      accssories: null,
      spec: null,
      filterValue: [],
      list:[],
      pageDetail:[],
      activePage: 0
    }

    this.onClick = this.onClick.bind(this);
    this.activePage = this.activePage.bind(this);
    this.activePageBySelect = this.activePageBySelect.bind(this);
    this.onViewAll = this.onViewAll.bind(this);
  }

  onClick(e){
    const filterValue = this.state.filterValue
    if(e.target.checked){
      filterValue.push(e.target.value)
      this.setState({filterValue:filterValue})
    }else{
      filterValue.splice(filterValue.indexOf(e.target.value),1)
      this.setState({filterValue:filterValue})
    }
  }

  activePage(e){
    if(e.target.innerText === "Parts"){
      this.setState({activePage: "Parts"})
    }
    if(e.target.innerText === "Accessories"){
      this.setState({activePage: "Accessories"})
    }
    if(e.target.innerText === "Devices"){
      this.setState({activePage: "Devices"})
    }
    if(e.target.innerText === "Buyback"){
      this.setState({activePage: "BuyBack"})
    }
  }

  activePageBySelect(e){
    if(e.target.value === "All Category"){
      this.setState({activePage: "Parts"})
    }
    if(e.target.value === "Parts"){
      this.setState({activePage: "Parts"})
    }
    if(e.target.value === "Accessories"){
      this.setState({activePage: "Accessories"})
    }
    if(e.target.value === "Devices"){
      this.setState({activePage: "Devices"})
    }
    if(e.target.value === "BuyBack"){
      this.setState({activePage: "BuyBack"})
    }
  }

  onViewAll(){
    const viewAll = this.state.brand
    if(!this.state.view){
      viewAll.push("Redmi","Realme","HTC","Oppo","Vivo")
    }
    if(this.state.view){
      viewAll.splice(5,5)
    }
    this.setState({view: !this.state.view})
  }

  componentDidMount(){
    this.setState({list: ["Parts","Accessories","Devices","Buyback"]})
    this.setState({producttype:["Adhesives","Antennas","Battery covers","Board ICs","Brackets"]})
    this.setState({star:["5","4","3","2","1"]})
    this.setState({brand:["Apple","Samsung","LG","Sony","Huawei"]})
    this.setState({color:["Blue","Gray","Brown","Black","White","Green"]})
    this.setState({
      accssories:
      [{
        src:"Images/SamsungTypeCAdapter.jpg",
        alt:'Type C Adapter',
        title:"Samsung Type-C Adapter",
        rate1: "$68.05",
        rate2: "$14.99"
      }]
    })
    this.setState({
      spec:
        [{
        src:"Images/GalaxyS21Plus.jpg",
        alt:'GalaxyS21+',
        title:"Samsung Galaxy S21+ 5G 128GB (Grade A)",
        type:"(Handset Only)",
        idno: "GH82-22131D",
        os: "Android 10",
        display: "6.53, IPS",
        resolution: "2340x1080",
        cpu: "Mediatek Helio G80, 2000MGh, 8 core",
        ram: "4GB",
        memory: "128GB",
        rate1: "$488.99",
        rate2: "$2139.49"
      },
      {
        src:"Images/GalaxyNote10Plus.jpg",
        alt:'GalaxyNote10+',
        title:"Samsung Galaxy Note 10 Plus 256GB (Grade B)",
        type:"(Handset Only)",
        idno: "GH82-22131D",
        os: "Android 10",
        display: "6.53, IPS",
        resolution: "2340x1080",
        cpu: "Mediatek Helio G80, 2000MGh, 8 core",
        ram: "4GB",
        memory: "256GB",
        rate1: "$488.99",
        rate2: "$531.49"
      },
      {
        src:"Images/GalaxyS21.jpg",
        alt:'GalaxyS21',
        title:"Samsung Galaxy S21 5G 128GB (Grade A)",
        type:"(Handset Only)",
        idno: "GH82-22131D",
        os: "Android 10",
        display: "6.53, IPS",
        resolution: "2340x1080",
        cpu: "Mediatek Helio G80, 2000MGh, 8 core",
        ram: "4GB",
        memory: "128GB",
        rate2: "$719.49"
      },
      {
        src:"Images/Mi11Ultra.jpg",
        alt:'Mi11Ultra',
        title:"Xiaomi Mi 11 Ultra 256GB(Grade A)",
        type:"(Handset Only)",
        idno: "GH82-22131D",
        os: "Android 11",
        display: "6.53, IPS",
        resolution: "2340x1080",
        cpu: "Mediatek Helio G80, 2000MGh, 8 core",
        ram: "12GB",
        memory: "256GB",
        rate1: "488.99",
        rate2: "$719.49"
      }
    ]
    })
    this.setState({pageDetail:[1,2,3,4,5,6,7,8,9,10]})
  }
  render() {
    if(!this.state.spec){
      return "Loading"
  }
    const activePage =[]

    if(this.state.activePage === 0){
      activePage.push(<Parts type={this.state.producttype} star={this.state.star} 
        brand={this.state.brand} color={this.state.color} onClick={this.onClick}
        filterValue={this.state.filterValue} spec={this.state.spec} view={this.state.view} viewAll={this.onViewAll} key={0}/>)
    }

    if(this.state.activePage === "Parts"){
      activePage.push(<Parts type={this.state.producttype} star={this.state.star} 
        brand={this.state.brand} color={this.state.color} onClick={this.onClick}
        filterValue={this.state.filterValue} spec={this.state.spec} view={this.state.view} viewAll={this.onViewAll} key={0}/>)
    }

    if(this.state.activePage === "Accessories"){
      activePage.push(<Accessories type={this.state.producttype} star={this.state.star} 
        brand={this.state.brand} color={this.state.color} onClick={this.onClick}
        filterValue={this.state.filterValue} spec={this.state.accssories} view={this.state.view} viewAll={this.onViewAll} key={1}/>)
    }

    if(this.state.activePage === "Devices"){
      activePage.push(<Devices type={this.state.producttype} star={this.state.star} 
        brand={this.state.brand} color={this.state.color} onClick={this.onClick}
        filterValue={this.state.filterValue} spec={this.state.spec} view={this.state.view} viewAll={this.onViewAll} key={2}/>)
    }

    if(this.state.activePage === "BuyBack"){
      activePage.push(<BuyBack key={3}/>)
    }

    return (
    <div className='App'>
        <MainHeader1/>
        <MainHeader onChange={this.activePageBySelect}/>
        <List list={this.state.list} activePage={this.activePage}/>
        {activePage}
        <PageChange pageDetail={this.state.pageDetail}/>
    </div>
    )
  }
}

export default App
