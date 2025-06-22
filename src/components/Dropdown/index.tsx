import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  label: string;
}

const Dropdown: React.FC<Props> = ({ options, selectedValue, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === selectedValue);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.header, isOpen && styles.headerOpen]} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.labelText}>{selectedOption && selectedOption.label && selectedOption.value ? selectedOption.label : label}</Text>
        < Text style={styles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.optionsContainer}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  item.value === selectedValue && styles.selectedOption,
                ]}
                onPress={() => handleSelect(item.value)}
              >
                <Text
                  style={[
                    styles.optionText,
                    item.value === selectedValue && styles.selectedOptionText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
