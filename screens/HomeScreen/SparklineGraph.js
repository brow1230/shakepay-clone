import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation, bSplineInterpolation, useChartData} from '@rainbow-me/animated-charts';


export default function SparklineGraph (props) {


    const {width: SIZE} = Dimensions.get('window');
    let data
    try {
        let prices = props.data[0].prices
        let dates = props.data[0].timestamps
        data = prices.map(function(price,i) {
                    // console.log(data.timestamps[i])
                    let date = new Date(dates[i])
                    let formattedPrice = parseInt(price).toLocaleString("en-US", {style:"currency", currency:"USD"})
        
                    return {
                        date: date,
                        formattedPrice:formattedPrice,
                        y:parseInt(price),
                        // x:data.timestamps[i+1],
                        x:date.getTime(),
                    }
                })

    } catch (error) {
        data = [];
        console.log(error)
    }

     
    
    // const points = monotoneCubicInterpolation({data, range: 380});
    const points = bSplineInterpolation({data, range: 100});   

    const BasicExample = () => (
        <View style={{ backgroundColor: 'transparent' }}>
          <ChartPathProvider data={{ points, smoothingStrategy: 'complex', smoothingFactor:0}}>
            <ChartPath height={SIZE / 2} stroke="#079efe" width={SIZE} />
            <ChartDot style={{ backgroundColor: '#079efe',}} />
          </ChartPathProvider>
        </View>)
    return(
        <BasicExample/>
    )
}

let styles = StyleSheet.create({
    graphView:{
        width:'100%',
        height:300
    },
})