import React,{use} from 'react';

const Countries = ({countriesPromise}) => {
    const {countries} = use(countriesPromise);
     console.log(countries)
    return (
        <div>
            <h1>In the countries:{countries.length}</h1>
           
        </div>
    );
};

export default Countries;