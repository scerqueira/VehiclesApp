import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../types/navigation';
import VehicleRow from '../../components/VehicleRow';

import * as S from './Vehicles.styles';
import PaginationControls from '../../components/PaginationControls';
import { Vehicle } from '../../types/vehicles';
import useList from '../../hooks/useList';
import { useVehiclesContext } from '../../context/VehiclesContext';
import LabelInput from '../../components/LabelInput';
import SelectInput from '../../components/SelectInput';
import RangeFilter from '../../components/RangeInput';
import SwitchButton from '../../components/SwitchButton';
import { ListRenderItem } from 'react-native';

const ITEMS_PER_PAGE_OPTIONS = ['5', '10', '15', '20'];

const SORT_BY_OPTIONS = ['make', 'model', 'startingBid', 'mileage'] as (keyof Vehicle)[];
const SORT_BY_LABELS = SORT_BY_OPTIONS.map((option) => ({
  label: option.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
  key: option,
}));

const Vehicles: React.FC = () => {
  const { vehicles } = useVehiclesContext();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [makeFilter, setMakeFilter] = useState('');
  const [modelFilter, setModelFilter] = useState('');
  const [minBid, setMinBid] = useState(0);
  const [maxBid, setMaxBid] = useState(1000000);
  const [favouriteFilter, setFavouriteFilter] = useState(false);
  const [sortedBy, setSortedBy] = useState('');

  const filterFunction = (vehicle: Vehicle, filters: any) => {
    let isValid = true;

    if (filters.make) {
      isValid = isValid && vehicle.make.toLowerCase().includes(filters.make.toLowerCase());
    }
    if (filters.model) {
      isValid = isValid && vehicle.model.toLowerCase().includes(filters.model.toLowerCase());
    }
    if (filters.favourite) {
      isValid = isValid && vehicle.favourite === filters.favourite;
    }
    if (filters.minBid !== undefined) {
      isValid = isValid && vehicle.startingBid >= filters.minBid;
    }
    if (filters.maxBid !== undefined) {
      isValid = isValid && vehicle.startingBid <= filters.maxBid;
    }

    return isValid;
  };

  const {
    filteredData,
    currentPage,
    totalItems,
    itemsPerPage,
    applyFilters,
    applySorting,
    setCurrentPage,
    updateItemsPerPage,
  } = useList(vehicles, filterFunction, Number(ITEMS_PER_PAGE_OPTIONS[3]));

  useEffect(() => {
    applyFilters({
      make: makeFilter,
      model: modelFilter,
      favourite: favouriteFilter,
      minBid,
      maxBid,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [makeFilter, modelFilter, favouriteFilter, minBid, maxBid]);

  const toggleSwitchFavourite = () => {
    setFavouriteFilter((prev) => !prev);
  };

  const handleItemsPerPage = (value: string) => {
    updateItemsPerPage(Number(value));
  };

  const handleSortedBy = (value: keyof Vehicle) => {
    setSortedBy(value);
    applySorting(value);
  };

  const renderVehicleItem: ListRenderItem<Vehicle> = ({ item }) => (
    <VehicleRow vehicle={item} onPress={() => navigation.navigate('VehicleDetails', { id: item.id })} />
  );

  console.log('Filtered Data:', filteredData);

  return (
    <S.MainContainer>
      <S.FiltersContainer>
        <LabelInput label="Make" placeholder="Filter by Make" value={makeFilter} onChange={setMakeFilter} />
        <LabelInput label="Model" placeholder="Filter by Model" value={modelFilter} onChange={setModelFilter} />
        <RangeFilter
          label="Bid range"
          minValue={minBid}
          maxValue={maxBid}
          onChangeMin={setMinBid}
          onChangeMax={setMaxBid}
        />
        <S.FilterContainer>
          <SelectInput
            label="Items per page"
            defaultValue={String(itemsPerPage)}
            onSelect={handleItemsPerPage}
            options={ITEMS_PER_PAGE_OPTIONS}
          />
          <S.FilterContainer>
            <SelectInput
              label="Sorted by"
              defaultValue={sortedBy}
              onSelect={(value) => handleSortedBy(value as keyof Vehicle)}
              options={SORT_BY_LABELS}
            />
          </S.FilterContainer>
        </S.FilterContainer>
        <SwitchButton label="Favourites" value={favouriteFilter} onChange={toggleSwitchFavourite} />
      </S.FiltersContainer>

      {filteredData.length === 0 ? (
        <S.NoResultsContainer>
          <S.NoResults>No vehicles found</S.NoResults>
        </S.NoResultsContainer>
      ) : (
        <S.VehicleList
          data={filteredData}
          extraData={filteredData}
          renderItem={renderVehicleItem}
          keyExtractor={(item: Vehicle) => String(item.id)}
          initialNumToRender={itemsPerPage}
        />
      )}

      <PaginationControls
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onChangePage={() => {}}
      />
    </S.MainContainer>
  );
};

export default Vehicles;
