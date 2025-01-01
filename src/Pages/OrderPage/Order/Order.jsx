import React, { useState } from 'react';
import OrderBanner from '../OrderComponets/OrderBanner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from './../../../Hooks/UseMenu';
import Card from '../../Shared/Card';

const Order = () => {
    const [tabindex,settabinsex] = useState(0)
    const [menu] = UseMenu()
    const pizzamenu = menu.filter(items=>items.category==='pizza')
    const saladmenu = menu.filter(items=>items.category==='salad')
    const soupmenu = menu.filter(items=>items.category==='soup')
    const drinksmenu = menu.filter(items=>items.category==='drinks')
    const dessertmenu = menu.filter(items=>items.category==='dessert')

    return (
        <div>
          <OrderBanner/>
          <section className=''>
          <Tabs className={'w-10/12 mx-auto'} defaultIndex={tabindex} onSelect={(index) => settabinsex(index)}>
    <TabList className={'flex justify-center my-7'}>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
    </TabList>

    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        saladmenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        pizzamenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
       soupmenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        dessertmenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
    <TabPanel>
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {
        drinksmenu.map(item=><Card item={item}></Card>)
      }
      </section>
    </TabPanel>
  </Tabs>

          </section>
            
        </div>
    );
};

export default Order;