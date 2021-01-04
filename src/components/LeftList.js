import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { loadCountries, selectItem, removeItem } from '../actions/countries';

const country = [{
    id: 1,
    country: 'Portugal',
    names: [{
        id: 1,
        name: 'Aasiya',
        isSelected: false
    }, {
        id: 2,
        name: 'Luvleen',
        isSelected: false
    }, {
        id: 3,
        name: 'Rey',
        isSelected: false
    }, {
        id: 4,
        name: 'Cayla',
        isSelected: false
    }]
},
{
    id: 2,
    country: 'Nicaragua',
    names: [{
        id: 1,
        name: 'Dayeedaas',
        isSelected: false
    }, {
        id: 2,
        name: 'Obasey',
        isSelected: false
    }, {
        id: 3,
        name: 'Xenie',
        isSelected: false
    }, {
        id: 4,
        name: 'Ezequiel',
        isSelected: false
    }]
},
{
    id: 3,
    country: 'Marshall Islands',
    names: [{
        id: 1,
        name: 'Aaron Almaraz',
        isSelected: false
    }, {
        id: 2,
        name: 'Jelena Denisova',
        isSelected: false
    }]
}];

const LeftList = () => {
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCountries(country))
    }, [dispatch]);

    return (
        <div className="card w-100">
            <div className="card-body">
                <Form>
                    {countries.map((item) => {
                        return (
                            <div key={item.id}>
                                <h5>{item.country}</h5>
                                {item.names.map((name) => {
                                    return (
                                        <Form.Group key={name.id}>
                                            <Form.Check
                                                type='checkbox'
                                                id={`checkbox-${item.id}-${name.id}`}
                                                label={name.name}
                                                checked={name.isSelected}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        dispatch(selectItem(item.id, name.id));
                                                    } else {
                                                        dispatch(removeItem(item.id, name.id));
                                                    }
                                                }}
                                            />
                                        </Form.Group>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Form>
            </div>
        </div>
    );
};

export default LeftList;