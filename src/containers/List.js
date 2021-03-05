import React, { Component } from "react"
import Card from '../elements/Card'

class List extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            loading:true,
        };
    };

    async componentDidMount() {
        try{
            const movies = await fetch('../../assets/data.json');
            const moviesJSON =  await movies.json();
            if(moviesJSON){
                this.setState({
                    data: moviesJSON,
                    loading: false,
                });
            }
        } catch(e){
            this.setState({
                data: [],
                loading: false,
                error: e.toString(),
            });
        }
    }

    render(){
        const { data, loading, error } = this.state;

        if(loading) return <div>Loading...</div>;
        if(error) return <div>{error}</div>;
        return data.map(movie => <Card key={ movie.id } movie={ movie }/>);
    };
};

export default List;