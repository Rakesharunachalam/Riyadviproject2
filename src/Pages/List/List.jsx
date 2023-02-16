import React, { useState } from 'react'
import './List.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns'
import { DateRange } from 'react-date-range';
import { faL } from '@fortawesome/free-solid-svg-icons';
import SearchItem from '../../Components/SearchItem/SearchItem';

const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination);
  const [date,setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options);


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
             { openDate && (<DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />)}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Min price<small>per night</small>
                </span>
                <input type="number" className='lsOptionInput'></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Max price<small>per night</small>
                </span>
                <input type="number" className='lsOptionInput'></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText' >
                  Adult
                </span>
                <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                  Children
                </span>
                <input type="number" min={0} className='lsOptionInput' placeholder={options.children}></input>
              </div>
              <div className='lsOptionItem'>
                <span className='lsOptionText'>
                Room
                </span>
                <input type="number" min={1}className='lsOptionInput' placeholder={options.room}></input>
              </div>
            </div>
            </div>
            <button>Search</button>
            </div>
           
            <div className='listResult'>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
            </div>
            </div>
    </div>
  )
}

export default List