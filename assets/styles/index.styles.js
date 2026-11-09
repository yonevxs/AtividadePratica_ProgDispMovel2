import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B14',
  },
  listContent: {
    padding: 16,
    paddingBottom: 90,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    marginBottom: 10,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1.2,
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
