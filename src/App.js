import React, { Component } from 'react';
import './App.css';
import './styles/simoncss.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import jeans from './images/kids/jeans-boys.png';
import jumper from './images/kids/jumper-boys.png';
import hoodie from './images/kids/hoodie-boys.png';
import jeans2 from './images/kids/jeans-boys2.png';
import tshirt from './images/kids/tshirt-boys.png';

import { Bar } from './components/Bar';
import { Main_nav } from './components/Main_nav';
import { Sale } from './pages/Sale'
import { Home } from './pages/Home';
import { Men } from './pages/Men';
import { Women } from './pages/Women';
import { Kids } from './pages/Kids';
import { Footer } from './components/Footer';
import { Shipping } from './components/Shipping';
import { Products } from './pages/products';
import { Checkout } from './pages/checkout';
import { Mini } from './components/Mini_checkout';




class App extends Component {
  constructor(props) {
    super(props)

    //shopping bag array
    this.state = {
      bag: [],
      Stuff: [{
        id: 1,
        title: '514 Jeans',
        price: 67.00,
        count: 1,
        image: jeans,
        color: 'Black',
        latest: 3
      },{
        id: 2,
        title: '511 Jeans',
        price: 50.00,
        count: 1,
        image: jeans2,
        color: 'Blue',
        latest: 2
      },{
        id: 3,
        title: 'Street Hoodie',
        price: 20.00,
        count: 1,
        image: hoodie,
        color: 'Black',
        latest: 4
      },{
        id: 4,
        title: 'T-Shirt / grey',
        price: 34.00,
        count: 1,
        image: tshirt,
        color: 'Grey',
        latest: 1
      }],
      total: 0,
      totalCount: 0,
      selected: 'recommended',
      searched: [],
      minibag: [],
    }

    this.addToBag = this.addToBag.bind(this)
    this.removeFromBag = this.removeFromBag.bind(this)
    this.changeCount = this.changeCount.bind(this)
    this.filterColor = this.filterColor.bind(this)
    this.sort = this.sort.bind(this)
    this.search = this.search.bind(this)
  }

  miniUpdate(item){
var mini = document.getElementById("mini")
    if (this.state.minibag.includes(item)) {
               
         mini.style.display = "block"
    }
    else{
         mini.style.display = "block"

            this.setState((currentState) => {
      return {
        minibag: currentState.minibag.concat([item]).filter(x => x == item),
      }

    })
    }



         setTimeout(() => mini.style.display = "none", 4000)
  }


    addToBag(item) {

      if (this.state.bag.includes(item)) {
        var a = this.state.bag.indexOf(item);

          if (this.state.bag[a].count < 5) {
              this.state.bag[a].count++;
              this.addToTotal(item)
              this.updateBag()
              this.miniUpdate(item)
            }
            else if (this.state.bag[a].count == 5) {
              alert('Sorry there is limited stock on this item')
            }


      }
      else {

        var x = this.state.total += item.price
        this.state.totalCount++
        this.miniUpdate(item)

            this.setState((currentState) => {
      return {
        bag: currentState.bag.concat([item]),
        total: x,

      }

    })


      }

  }

    removeFromBag(item) {
      var x = item.price * item.count;
      var y = this.state.total - x;

      var a = this.state.bag.indexOf(item);
      var c = this.state.totalCount - this.state.bag[a].count
      
      this.state.bag[a].count = 1;
      

      this.setState((currentState) => {
      return {
        bag: currentState.bag.filter(x => x != item),
        total: y,
        totalCount: c,

      }

    })

  }

  changeCount(item, id){
      var sel = document.getElementById(id);
      var a = this.state.bag.indexOf(item);


            if (sel.value > this.state.bag[a].count) {
              this.state.bag[a].count++;
              this.addToTotal(item)
              this.updateBag()
            }
            else if (sel.value < this.state.bag[a].count) {
              this.state.bag[a].count--;
              this.subtractTotal(item)
              this.updateBag()
            }
  }

  addToTotal(item){

      var x = this.state.total
      x += item.price
      this.setState((currentState) => {
      return {
        total: x,

      }

    })
  }

    subtractTotal(item){

      var x = this.state.total
      x -= item.price
      this.setState((currentState) => {
      return {
        total: x,

      }

    })
  }

  updateBag(){
    var x = 0;
    for(var i = 0; i < this.state.bag.length; i++){
      x += this.state.bag[i].count;
    }
          this.setState((currentState) => {
      return {
        totalCount: x,

      }

    })

  }


  filterColor(checkbox, color){
    if (checkbox.checked == true) {
      this.setState((currentState) => {
      return {
        Stuff: currentState.Stuff.filter(x => x.color != color),

      }

    })


    }
    else {
            this.setState((currentState) => {
      return {
        Stuff: currentState.Stuff.filter(x => x.color == color),

      }

    })
    }

  }

  sort(){
    var select = document.getElementById('select');

    var x = select.value;

    if (x == 'recommended') {
      var y = this.state.Stuff.sort((a,b) => a.id > b.id)
    } else if (x == 'latest') {
      var y = this.state.Stuff.sort((a,b) => a.latest > b.latest)
    } else if (x == 'low') {
      var y = this.state.Stuff.sort((a,b) => a.price > b.price)
    } else if (x == 'high') {
      var y = this.state.Stuff.sort((a,b) => a.price < b.price)
    }

          this.setState((currentState) => {
      return {
        Stuff: y,
        selected: x,
      }

    })
  }

  search(event){

    console.log('connected')

    // window.location.replace('/men');

    // this.state.searched.push({
    //     id: 1,
    //     title: '514 Jeans',
    //     price: 67,
    //     count: 1,
    //     image: jeans,
    //     color: 'Black',
    //     latest: 3
    //   })

    // var term = document.getElementById('search-box').value
    
    //   this.setState((currentState) => {
    // return {
    //     searched: currentState.Stuff.filter(x => x.color == term)      

    // }})

  }




  render() {
    return (
      <div className="container greybg">
           <Bar />
              <BrowserRouter>
                <div className='container  bg-white'>
                  <Main_nav bag={this.state.bag} totalCount={this.state.totalCount} search={this.search}/>

                  <Mini minibag={this.state.minibag}/>

                  <Shipping />

                        <div className='container'>
                          <Route exact path='/' component={Home} />
                          <Route path='/sale' component={Sale} />
                          <Route path='/men' component={Men} />
                          <Route path='/women' component={Women} />
                          <Route path='/kids' component={Kids} />
                          <Route path='/products' component={() => <Products selected={this.state.selected} Stuff={this.state.Stuff} addToBag={this.addToBag} filterColor={this.filterColor} sort={this.sort}/>} />
                          <Route path='/checkout' component={() => <Checkout bag={this.state.bag} removeFromBag={this.removeFromBag} changeCount={this.changeCount} total={this.state.total}/>} />
                        </div>
                  </div>
              </BrowserRouter>
           <Footer />
        
      </div>
    );
  }
}

export default App;
