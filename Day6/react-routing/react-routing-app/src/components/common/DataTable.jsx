import React from 'react';

const Th = ({ item }) => {
    const allHeads = Object.keys(item).concat(['', 'actions', '']);

    const ths = allHeads.map((head, index) => {
        return <th key={`${item.id}-${index}`}>{head.toUpperCase()}</th>
    });

    return <tr>{ths}</tr>;
}

const Tr = ({ item, onSelect, onDelete }) => {
    const allValues = Object.values(item).concat([
        <a href="/#" className='text-info' onClick={
            (e) => {
                e.preventDefault();
                if(onSelect) 
                    onSelect(item, false);
            }
        }>Details</a>,
        <a href="/#" className='text-warning' onClick={
            (e) => {
                e.preventDefault();
                if(onSelect) 
                    onSelect(item, true);
            }
        }>Edit</a>,
        <a href="/#" className='text-danger' onClick={
            (e) => {
                e.preventDefault();
                if(onDelete)
                    onDelete(item.id);
            }
        }>Delete</a>
    ]);

    const tds = allValues.map((item, index) => {
        return <td key={`${item.id}-${index}`}>{item}</td>
    });

    return <tr>{tds}</tr>;
}

const DataTable = ({ items, children, onSelect, onDelete }) => {
    if (items && items.length) {
        let [item] = items;
        var headers = <Th item={item} />
        var trs = items.map((item) => <Tr key={item.id} item={item} onSelect={onSelect} onDelete={onDelete}/>);
    }
    return (
        <>
            {children && children}
            <hr />
            <table className='table table-striped'>
                <thead>
                    {headers}
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </>
    );
};

export default DataTable;