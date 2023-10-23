import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ToastManager, { Toast } from 'toastify-react-native';
import MainLayout from '../../layout/mainLayout/mainLayout';
import Avatar from '../../components/generall/avatar/avatar';
import DropDown from '../../components/generall/dropDown/dropDown';
import Search from '../../components/generall/search/search';
import useUserStore from '../../modules/user/store';
import PromoBanner from '../../components/main/promoBanner/promoBanner';
import Carousel from '../../components/main/carusel/carousel';
import MainListItem from '../../components/main/mainListItem/mainListItem';
import useProductStore from '../../modules/products/store';
import { unauthorizedRequest } from '../../utils/queries';
import { getAllProductsUrl } from '../../utils/network';
import { styles } from './main.style';

const categories = ['Cappuccino', 'Machiato', 'Latte', 'Cum', 'Orange'];
const filters = ['ABC', 'CBC', 'QWE'];

function Main () {
  const user = useUserStore((state) => state);
  const productsStore = useProductStore((state) => state);
  const [location, setLocation] = useState('Ukraine');
  const [search, setSearch] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const updateLocation = (location: string) => {
    setLocation(location);
  };
  const handleSearch = (value: string) => {
    setSearch(value);
  };
  const updateFilters = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters((prev) => [...prev.filter((item) => item !== filter)]);
    } else {
      setActiveFilters((prev) => [...prev, filter]);
    }
  };

  const updateCategories = (category: string) => {
    setActiveCategory(category);
  };

  const getProductData = async () => {
    try {
      const response = await unauthorizedRequest(getAllProductsUrl, 'GET');
      if (response && response.length > 0) {
        productsStore.updateProductData(response);
      }
    } catch (err) {
      Toast.error(`${String(err).slice(0, 20)}...`);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MainLayout style={{ paddingBottom: 70 }}>
      <ToastManager />
      <View style={styles.locationContainer}>
        <View style={styles.locationDropDownContainer}>
          <View>
            <Text style={styles.whiteText}>Location</Text>
          </View>
          <View>
            <DropDown
              currentValue={location}
              valueList={['USA', 'UGANDA', 'MOON']}
              updateCurrentValue={updateLocation}
            />
          </View>
        </View>
        <Avatar url={user.avatar} />
      </View>
      <Search
        additionalStyles={styles.search}
        placeholder="Search coffee"
        value={search}
        updateValue={handleSearch}
        filters={filters}
        updateFilters={updateFilters}
        activeFilters={activeFilters}
      />
      <PromoBanner
        src="http://192.168.88.106:3000/files/output/file0201020301.png"
        title="Buy one get one Free"
      />
      <Carousel list={categories} active={activeCategory} updateActive={updateCategories} />

      <View style={styles.menuContainer}>
        <FlatList
          data={productsStore.products}
          renderItem={({ item }) => <MainListItem product={item} addOrder={() => {}} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.starsCount + item.title}
        />
      </View>
    </MainLayout>
  );
}

export default Main;
