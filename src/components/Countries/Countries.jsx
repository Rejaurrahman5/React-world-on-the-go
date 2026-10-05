import {use} from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const {countries} = use(countriesPromise);
    //  console.log(countries)
    return (
        <div >
            <h1 className='text-5xl text-center mb-5 text-bold'>In the countries:{countries.length}</h1>
           <div className='countries '>
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
           
           </div>
        </div>
    );
};

export default Countries;