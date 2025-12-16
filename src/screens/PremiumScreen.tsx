// src/screens/PremiumScreen.tsx
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator,
  ScrollView,
  TextInput,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../constants/Colors';
import PurchaseService from '../services/PurchaseService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PremiumScreen = () => {
  const navigation = useNavigation();
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [redeeming, setRedeeming] = useState(false);

  useEffect(() => {
    loadOfferings();
  }, []);

  const loadOfferings = async () => {
    setLoading(true);
    const availablePackages = await PurchaseService.getOfferings();
    setPackages(availablePackages);
    setLoading(false);
  };

  const handlePurchase = async (packageToPurchase: any) => {
    setPurchasing(true);
    const result = await PurchaseService.purchasePremium(packageToPurchase);
    
    if (result.success) {
      Alert.alert(
        'Success!',
        'Welcome to Premium! Enjoy all the exclusive features with no ads.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } else {
      Alert.alert('Purchase Failed', result.error || 'Something went wrong');
    }
    
    setPurchasing(false);
  };

  const handleRestore = async () => {
    setPurchasing(true);
    const result = await PurchaseService.restorePurchases();
    
    if (result.success) {
      if (result.isPremium) {
        Alert.alert(
          'Restored!',
          'Your premium subscription has been restored.',
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } else {
        Alert.alert('No Purchases Found', 'No previous purchases found to restore.');
      }
    } else {
      Alert.alert('Restore Failed', result.error || 'Could not restore purchases');
    }
    
    setPurchasing(false);
  };

  const handleRedeemCoupon = async () => {
    if (!couponCode.trim()) {
      Alert.alert('Error', 'Please enter a coupon code');
      return;
    }

    setRedeeming(true);

    // Predefined coupon codes for testing/giveaways
    const validCoupons = [
      'FRIEND2024',
      'REVIEWER',
      'BETA_TESTER',
      'WELCOME_GIFT'
    ];

    if (validCoupons.includes(couponCode.toUpperCase())) {
      try {
        await AsyncStorage.setItem('isPremium', 'true');
        await AsyncStorage.setItem('premiumMethod', 'coupon');
        await AsyncStorage.setItem('premiumCoupon', couponCode.toUpperCase());
        
        setShowCouponModal(false);
        setCouponCode('');
        Alert.alert(
          'Success!',
          'Coupon redeemed successfully! You now have premium access.',
          [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
      } catch (error) {
        Alert.alert('Error', 'Failed to redeem coupon. Please try again.');
      }
    } else {
      Alert.alert('Invalid Coupon', 'This coupon code is not valid or has expired.');
    }

    setRedeeming(false);
  };

  const premiumFeatures = [
    {
      icon: 'grid',
      title: 'Study by Category',
      description: 'Focus on Politics, History, Society, and Holocaust topics'
    },
    {
      icon: 'map',
      title: 'Bundesland Questions',
      description: 'Practice state-specific questions for your region'
    },
    {
      icon: 'clock',
      title: 'Test Simulation',
      description: 'Real exam conditions: 33 questions in 60 minutes'
    },
    {
      icon: 'x-circle',
      title: 'Ad-Free Experience',
      description: 'Study without interruptions - no advertisements'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color={colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upgrade to Premium</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.heroSection}>
          <Feather name="star" size={48} color="#FFD700" />
          <Text style={styles.heroTitle}>Unlock Your Full Potential</Text>
          <Text style={styles.heroSubtitle}>
            Get access to all premium features and ace your German citizenship test
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Premium Features</Text>
          {premiumFeatures.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Feather name={feature.icon as any} size={20} color={colors.primary} />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
        ) : (
          <View style={styles.pricingSection}>
            <Text style={styles.sectionTitle}>Choose Your Plan</Text>
            {packages.map((pkg, index) => (
              <TouchableOpacity
                key={index}
                style={styles.priceCard}
                onPress={() => handlePurchase(pkg)}
                disabled={purchasing}
              >
                <View style={styles.priceHeader}>
                  <Text style={styles.priceTitle}>{pkg.product?.title || 'Premium Access'}</Text>
                  <Text style={styles.priceAmount}>{pkg.product?.priceString || '€7.99'}</Text>
                </View>
                <Text style={styles.priceDescription}>
                  {pkg.product?.description || 'Lifetime access to all premium features'}
                </Text>
                {purchasing ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.purchaseButtonText}>Get Premium</Text>
                )}
              </TouchableOpacity>
            ))}
            
            {packages.length === 0 && !loading && (
              <TouchableOpacity 
                style={styles.priceCard} 
                onPress={() => Alert.alert('Purchase', 'Premium purchase will be available soon!')}
              >
                <View style={styles.priceHeader}>
                  <Text style={styles.priceTitle}>Premium Lifetime Access</Text>
                  <Text style={styles.priceAmount}>€7.99</Text>
                </View>
                <Text style={styles.priceDescription}>
                  One-time purchase - Unlock all features with no ads forever
                </Text>
                <Text style={styles.purchaseButtonText}>Get Premium</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => setShowCouponModal(true)}
          >
            <Feather name="gift" size={18} color={colors.primary} />
            <Text style={styles.secondaryButtonText}>Redeem Coupon</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.restoreButton}
            onPress={handleRestore}
            disabled={purchasing}
          >
            <Text style={styles.restoreButtonText}>Restore Purchases</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            One-time purchase. No recurring payments. Premium access includes all current and future features.
          </Text>
        </View>
      </ScrollView>

      {/* Coupon Redemption Modal */}
      <Modal
        visible={showCouponModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCouponModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Redeem Coupon</Text>
              <TouchableOpacity onPress={() => setShowCouponModal(false)}>
                <Feather name="x" size={24} color={colors.text.primary} />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.couponDescription}>
              Enter your coupon code to unlock premium features
            </Text>
            
            <TextInput
              style={styles.couponInput}
              placeholder="Enter coupon code"
              value={couponCode}
              onChangeText={setCouponCode}
              autoCapitalize="characters"
              autoCorrect={false}
            />
            
            <TouchableOpacity
              style={styles.redeemButton}
              onPress={handleRedeemCoupon}
              disabled={redeeming}
            >
              {redeeming ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.redeemButtonText}>Redeem Coupon</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
  },
  heroSection: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: 'white',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresSection: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${colors.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 18,
  },
  pricingSection: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 8,
  },
  priceCard: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    alignItems: 'center',
  },
  priceHeader: {
    alignItems: 'center',
    marginBottom: 8,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  priceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  priceDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 16,
  },
  purchaseButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  buttonSection: {
    padding: 16,
    backgroundColor: 'white',
    marginTop: 8,
    gap: 12,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    gap: 8,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  restoreButton: {
    padding: 16,
    alignItems: 'center',
  },
  restoreButtonText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
  },
  footerText: {
    fontSize: 12,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 16,
  },
  loader: {
    margin: 32,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  couponDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 16,
    textAlign: 'center',
  },
  couponInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  redeemButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  redeemButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PremiumScreen;

