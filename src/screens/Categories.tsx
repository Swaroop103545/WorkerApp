import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import workerData from '../data/workerData.json';
import categoriesData from '../data/categoriesData.json';
import {IMAGES} from '../assets/images';

interface Category {
  id: string;
  Worker_Role: string;
  icon: string;
}

interface Worker {
  id: string;
  name: string;
  profileImage: string;
  countryFlag: string;
  categoryId: string;
}

export default function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [searchText, setSearchText] = useState('');

  const categories = categoriesData.map((category: Category) => ({
    ...category,
    icon: IMAGES[category.icon],
  }));

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const filteredWorkers = workerData
    .filter((worker: Worker) =>
      selectedCategory ? worker.categoryId === selectedCategory.id : true,
    )
    .filter((worker: Worker) =>
      worker.name.toLowerCase().includes(searchText.toLowerCase()),
    );

  return (
    <View style={styles.container}>
      <Header
        categories={categories}
        onCategoryPress={handleCategoryPress}
        onSearch={handleSearch}
      />
      <FlatList
        data={filteredWorkers}
        numColumns={4}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={IMAGES[item.countryFlag]}
              // source={{uri: item.countryFlag}}
              style={styles.countryFlag}
            />
            <Image
              source={IMAGES[item.profileImage]}
              style={styles.profileImage}
            />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  countryFlag: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 60,
    top: 25,
    zIndex: 99999,
  },
  title: {
    marginTop: 5,
    fontWeight: '600',
    color: '#000',
  },
});
