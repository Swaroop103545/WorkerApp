import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';

interface Category {
  id: string;
  Worker_Role: string;
  icon: any;
}

interface HeaderProps {
  categories: Category[];
  onCategoryPress: (category: Category) => void;
  onSearch: (text: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  categories,
  onCategoryPress,
  onSearch,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWraper}>
        <Image
          source={require('../assets/drawer.jpg')}
          style={styles.headerIcons}
        />
        <Text></Text>
        <Image
          source={require('../assets/bell.png')}
          style={styles.headerIcons}
        />
      </View>
      <View style={styles.categoryWrappper}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.BTNWrapper}
              onPress={() => onCategoryPress(item)}>
              <View style={styles.IMGWrapper}>
                <Image source={item.icon} style={styles.icon} />
              </View>
              <Text style={{fontSize: 10, color: '#000'}}>
                {item.Worker_Role}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={text => onSearch(text)}
        />
        <View style={{}}>
          <Image
            source={require('../assets/filter.png')}
            style={styles.filter}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff'},
  headerWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerIcons: {height: 34, width: 34},
  categoryWrappper: {backgroundColor: '#ccc', padding: 8},
  BTNWrapper: {alignItems: 'center', justifyContent: 'center'},
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
    borderRadius: 6,
  },
  icon: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 80,
  },
  filter: {
    height: 25,
    width: 25,
  },
  IMGWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 80,
    marginHorizontal: 2,
    marginBottom: 4,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
