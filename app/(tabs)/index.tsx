import { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Roadmap = {
  title: string
  emoji: string
  steps: string[]
  certs: string[]
}

const roadmaps: Roadmap[] = [
  {
    title: 'Pentest / Red Team',
    emoji: '🔴',
    steps: [
      'Networking + Linux basics',
      'Web app hacking: OWASP Top 10',
      'Active Directory attacks',
      'OSCP → CRTP → OSEP',
      'EDR evasion + custom tooling',
      'Lead engagements + reporting'
    ],
    certs: ['eJPT', 'PNPT', 'OSCP', 'CRTP', 'CRTE', 'OSEP', 'OSCE3']
  },
  {
    title: 'Cloud Security',
    emoji: '☁️',
    steps: [
      'Cloud basics: AZ-900 / AWS CCP',
      'IAM + Identity abuse',
      'Azure/AWS pentesting',
      'Terraform + IaC review',
      'CARTP → CARTE',
      'Multi-cloud + detection'
    ],
    certs: ['AZ-900', 'AWS SCS-C02', 'CARTP', 'CARTE', 'OSCP', 'GCPN']
  },
  {
    title: 'Blue Team / SOC',
    emoji: '🔵',
    steps: [
      'Logs + SIEM: Splunk/ELK',
      'Windows internals + forensics',
      'Threat hunting + detection eng',
      'Incident response playbooks',
      'BTL1 → GCIH → GCFA',
      'Malware analysis + RE'
    ],
    certs: ['Security+', 'BTL1', 'GCIH', 'GCFA', 'GNFA', 'GREM']
  },
  {
    title: 'AppSec / Code Review',
    emoji: '🛡️',
    steps: [
      'Secure coding: JS/Python/Java',
      'SAST/DAST tools + CI/CD',
      'Manual code review',
      'OSWE + burp suite mastery',
      'Threat modeling',
      'DevSecOps pipelines'
    ],
    certs: ['OSWE', 'GWAPT', 'CASE', 'CSSLP', 'OSCP']
  }
]

export default function Index() {
  const [active, setActive] = useState<number>(0)

  return (
    <ScrollView style={styles.container}>
      {/* HEADER SECTION (HTB Style) */}
      <View style={styles.headerBox}>
        <Text style={styles.owner}>UZOMBA EBUBE VICTORY</Text>
        <Text style={styles.dayCounter}>PROJECT PHASE: DAY 02</Text>
      </View>
      
      {/* THM STYLE STATUS NOTIFICATION */}
      <View style={styles.statusBanner}>
        <Text style={styles.statusText}>● SYSTEM STATUS: ONLINE / UPDATED</Text>
      </View>

      <Text style={styles.mainTitle}>Cybersecurity Roadmap</Text>

      <View style={styles.tabRow}>
        {roadmaps.map((roadmap, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.tab, active === idx && styles.tabActive]}
            onPress={() => setActive(idx)}
          >
            <Text style={[styles.tabText, active === idx && styles.tabTextActive]}>
              {roadmap.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* CONTENT CARD (Clean THM Lab Style) */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{roadmaps[active].emoji} PATHWAY: {roadmaps[active].title.toUpperCase()}</Text>
        </View>
        
        <View style={styles.contentBody}>
          <Text style={styles.sectionLabel}>Learning Path:</Text>
          {roadmaps[active].steps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <View style={styles.stepNumberBox}><Text style={styles.stepNumber}>{i + 1}</Text></View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}

          <View style={styles.divider} />

          <Text style={styles.sectionLabel}>Target Certifications:</Text>
          <View style={styles.certWrap}>
            {roadmaps[active].certs.map((cert, i) => (
              <View key={i} style={styles.certBadge}>
                <Text style={styles.certText}>{cert}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.actionArea}>
        <Button 
            title="DEPLOY UPDATES" 
            onPress={() => console.log('Commit #3: Professional UI Push')} 
            color="#9fef00" 
        />
      </View>

      <Text style={styles.footer}>build_version: 2.0.1 | connection: encrypted</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1219',
    padding: 20,
  },
  headerBox: {
    marginTop: 40,
    borderLeftWidth: 3,
    borderLeftColor: '#9fef00',
    paddingLeft: 15,
  },
  owner: {
    fontSize: 18,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 1,
  },
  dayCounter: {
    fontSize: 12,
    color: '#9fef00',
    fontWeight: 'bold',
    marginTop: 4,
  },
  statusBanner: {
    backgroundColor: '#1a1f29',
    padding: 8,
    borderRadius: 4,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#2d3545',
  },
  statusText: {
    color: '#5c6b89',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  tabRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#1a1f29',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2d3545',
  },
  tabActive: {
    borderColor: '#9fef00',
    backgroundColor: '#1a1f29',
  },
  tabText: {
    color: '#5c6b89',
    fontSize: 11,
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#9fef00',
  },
  card: {
    backgroundColor: '#161b22',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#30363d',
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#1f242d',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  contentBody: {
    padding: 20,
  },
  sectionLabel: {
    fontSize: 11,
    color: '#5c6b89',
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  stepRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  stepNumberBox: {
    width: 24,
    height: 24,
    backgroundColor: '#2d3545',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumber: {
    color: '#9fef00',
    fontSize: 10,
    fontWeight: 'bold',
  },
  stepText: {
    color: '#c9d1d9',
    fontSize: 13,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#30363d',
    marginVertical: 20,
  },
  certWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  certBadge: {
    backgroundColor: '#0d1117',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  certText: {
    color: '#9fef00',
    fontSize: 10,
    fontWeight: 'bold',
  },
  actionArea: {
    marginTop: 30,
    borderRadius: 4,
    overflow: 'hidden',
  },
  footer: {
    color: '#30363d',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
})
