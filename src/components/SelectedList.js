import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeItem } from '../actions/countries';

const SelectedList = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    const selectedList = useMemo(() => {
        let copy = JSON.parse(JSON.stringify(countries));
        return copy.filter(c => {
            c.names = c.names.filter((name) => {
                return name.isSelected
            });
            return c.names.length;
        });
    }, [countries])

    return (
        <div className="card w-100">
            <div className="card-body">
                {
                    (selectedList.length) ? (
                        selectedList.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h5>{item.country}</h5>
                                    {item.names.map((name) => {
                                        return (
                                            <div key={name.id} className="alert alert-secondary alert-dismissible " >
                                                <small>{name.name}</small>
                                                <button type="button" className="close" onClick={(e)=>{dispatch(removeItem(item.id, name.id));}}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    ): (
                        <p>No data</p>
                    )
                }
            </div>
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         countries: state.countries
//     };
// };

// const mapDispatchToProps = {
//     loadCountries
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
export default SelectedList;