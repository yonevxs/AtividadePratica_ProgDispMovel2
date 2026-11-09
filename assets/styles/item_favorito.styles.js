import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B14',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#F5F3FF',
    padding: 18,
    paddingBottom: 8,
    letterSpacing: 0.5,
  },
  listContent: {
    padding: 16,
    paddingBottom: 90,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyText: {
    color: '#DDD6FE',
    fontSize: 15,
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#121222',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(139, 92, 246, 0.2)',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  navText: {
    fontSize: 12,
    color: '#C4B5FD',
    fontWeight: '600',
  },
  activeNavText: {
    color: '#8B5CF6',
    fontWeight: '800',
  },
});
