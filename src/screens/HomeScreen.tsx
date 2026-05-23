import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useAuth } from '../context/AuthContext';

const HomeScreen: React.FC = () => {
  const { userProfile } = useAuth();

  const upcomingBirthdays = [
    {
      id: '1',
      name: 'John Doe',
      date: 'May 25',
      daysUntil: 2,
    },
    {
      id: '2',
      name: 'Jane Smith',
      date: 'June 10',
      daysUntil: 18,
    },
    {
      id: '3',
      name: 'Bob Johnson',
      date: 'June 15',
      daysUntil: 23,
    },
  ];

  const renderBirthdayItem = ({ item }: any) => (
    <View style={styles.birthdayCard}>
      <View style={styles.cardContent}>
        <Text style={styles.birthdayName}>{item.name}</Text>
        <Text style={styles.birthdayDate}>{item.date}</Text>
      </View>
      <View style={styles.daysContainer}>
        <Text style={styles.daysText}>{item.daysUntil}</Text>
        <Text style={styles.daysLabel}>days</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎂 Upcoming Birthdays</Text>

      {userProfile && (
        <View style={styles.greetingCard}>
          <Text style={styles.greetingText}>
            Welcome, {userProfile.displayName}!
          </Text>
        </View>
      )}

      {upcomingBirthdays.length > 0 ? (
        <FlatList
          data={upcomingBirthdays}
          renderItem={renderBirthdayItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No upcoming birthdays</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  greetingCard: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  greetingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    paddingBottom: 20,
  },
  birthdayCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
  },
  birthdayName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  birthdayDate: {
    fontSize: 14,
    color: '#666',
  },
  daysContainer: {
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  daysText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  daysLabel: {
    fontSize: 12,
    color: '#FF69B4',
    marginTop: 2,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default HomeScreen;
