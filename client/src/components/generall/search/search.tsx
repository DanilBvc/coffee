import React, { type FC, useState } from 'react';
import {
  type NativeSyntheticEvent,
  TextInput,
  type TextInputChangeEventData,
  View,
  Pressable,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { type searchType } from './search.type';
import { FilterSvg, LensSvg } from '../../../assets/images/icons';
import { styles } from './search.style';
import ModalWindow from '../modal/modal';
import CheckBox from '../checkBox/checkBox';

const Search: FC<searchType> = ({
  value,
  updateValue,
  placeholder,
  additionalStyles,
  filters,
  updateFilters,
  activeFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const newValue = event.nativeEvent.text;
    updateValue(newValue);
    closeModal();
  };

  return (
    <>
      <ModalWindow
        modalProps={{
          animationType: 'slide',
          transparent: true,
          visible: isOpen,
          onRequestClose: closeModal,
        }}
        close={closeModal}
      >
        <CheckBox
          optionList={filters}
          update={(item) => {
            updateFilters(item);
          }}
          activeItems={activeFilters}
          horizontal={false}
        />

        <View style={{ backgroundColor: '#C67C4E', borderRadius: 8 }}>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#8D8D8D"
          />
        </View>
      </ModalWindow>
      <View style={[styles.search, additionalStyles]}>
        <View style={[styles.searchContainer]}>
          <View style={styles.searchInput}>
            <LensSvg />
            <TextInput
              style={styles.input}
              placeholderTextColor="#989898"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
          </View>
          <Pressable style={[styles.filterIcon]} onPress={openModal}>
            <FilterSvg />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Search;
