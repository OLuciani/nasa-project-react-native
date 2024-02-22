import React, { useEffect, useState } from "react";
import { View, StyleSheet} from 'react-native';
import Header from "../../components/Header/Header";
import fetchApi from "../../utils/fetch"; //el nombre lo ponemos a gusto
import TodayImage from "../../components/TodaysImage/TodayImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = () => {
  const [todasysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
        console.log(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5Images = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, {days: 5}), "yyyy-MM-dd");

        const lastFiveDaysImagesresponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDate}`);

        setLastFiveDaysImages(lastFiveDaysImagesresponse);
        
      } catch (error) {
        console.error(error);
      }
    }

    loadTodaysImage().catch(null);
    loadLast5Images().catch(null);
  }, []);

  return (
    <View>
      <Header />

      <TodayImage {...todasysImage} />

      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({  
    container: {
      flex: 1,
      paddingHorizontal: 16,
      
    }
});


export default Home;
