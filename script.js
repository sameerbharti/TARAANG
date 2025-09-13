// Initialize charts and functionality
document.addEventListener('DOMContentLoaded', function() {
    // PV Forecast Chart
    const pvCtx = document.getElementById('pvForecastChart').getContext('2d');
    const pvForecastChart = new Chart(pvCtx, {
        type: 'line',
        data: {
            labels: ['Now', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '06:00'],
            datasets: [{
                label: 'PV Power Forecast (kW)',
                data: [3.8, 4.2, 3.5, 0.8, 0, 0, 0, 0, 0.2, 1.5],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kW'
                    }
                }
            }
        }
    });
    
    // Efficiency Gauge
    const effCtx = document.getElementById('efficiencyGauge').getContext('2d');
    const efficiencyGauge = new Chart(effCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [78, 22],
                backgroundColor: ['#10b981', '#e5e7eb'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
    
    // Demand Chart
    const demandCtx = document.getElementById('demandChart').getContext('2d');
    const demandChart = new Chart(demandCtx, {
        type: 'bar',
        data: {
            labels: ['Now', '+1h', '+2h', '+3h', '+4h', '+5h', '+6h'],
            datasets: [{
                label: 'Demand Forecast (kW)',
                data: [1.2, 1.8, 2.5, 1.9, 1.5, 1.2, 0.8],
                backgroundColor: '#2563eb'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kW'
                    }
                }
            }
        }
    });
    
    // Generation Forecast Chart
    const genForecastCtx = document.getElementById('generationForecastChart').getContext('2d');
    const generationForecastChart = new Chart(genForecastCtx, {
        type: 'line',
        data: {
            labels: ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Expected Generation (kWh)',
                data: [18.2, 15.7, 12.3, 9.8, 14.5, 16.2, 17.8],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kWh'
                    }
                }
            }
        }
    });
    
    // Performance Gauge
    const performanceCtx = document.getElementById('performanceGauge').getContext('2d');
    const performanceGauge = new Chart(performanceCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [86, 14],
                backgroundColor: ['#10b981', '#e5e7eb'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
    
    // Battery History Chart
    const batteryHistoryCtx = document.getElementById('batteryHistoryChart').getContext('2d');
    const batteryHistoryChart = new Chart(batteryHistoryCtx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'SOC (%)',
                data: [45, 38, 72, 85, 64, 58],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'SOC %'
                    }
                }
            }
        }
    });
    
    // Load Distribution Chart
    const loadDistributionCtx = document.getElementById('loadDistributionChart').getContext('2d');
    const loadDistributionChart = new Chart(loadDistributionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Lighting', 'Appliances', 'Cooling', 'Other'],
            datasets: [{
                data: [25, 40, 20, 15],
                backgroundColor: ['#2563eb', '#0ea5e9', '#10b981', '#f59e0b']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Consumption Pattern Chart
    const consumptionPatternCtx = document.getElementById('consumptionPatternChart').getContext('2d');
    const consumptionPatternChart = new Chart(consumptionPatternCtx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
            datasets: [{
                label: 'Consumption (kW)',
                data: [0.8, 0.5, 1.2, 1.5, 2.1, 1.8],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kW'
                    }
                }
            }
        }
    });
    
    // Monthly Production Chart
    const monthlyProductionCtx = document.getElementById('monthlyProductionChart').getContext('2d');
    const monthlyProductionChart = new Chart(monthlyProductionCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Energy Production (kWh)',
                data: [420, 480, 520, 580, 620, 650, 680, 670, 630, 590, 510, 450],
                backgroundColor: '#0ea5e9'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kWh'
                    }
                }
            }
        }
    });
    
    // Energy Flow Chart
    const energyFlowCtx = document.getElementById('energyFlowChart').getContext('2d');
    const energyFlowChart = new Chart(energyFlowCtx, {
        type: 'doughnut',
        data: {
            labels: ['Solar to Load', 'Solar to Battery', 'Battery to Load', 'Grid to Load'],
            datasets: [{
                data: [65, 20, 15, 0],
                backgroundColor: ['#10b981', '#f59e0b', '#0ea5e9', '#ef4444']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Efficiency Trend Chart
    const efficiencyTrendCtx = document.getElementById('efficiencyTrendChart').getContext('2d');
    const efficiencyTrendChart = new Chart(efficiencyTrendCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Efficiency (%)',
                data: [82, 84, 83, 85, 87, 88, 86, 85, 84, 83, 82, 81],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 75,
                    max: 95,
                    title: {
                        display: true,
                        text: 'Efficiency %'
                    }
                }
            }
        }
    });
    
    // Consumption vs Production Chart
    const consumptionVsProductionCtx = document.getElementById('consumptionVsProductionChart').getContext('2d');
    const consumptionVsProductionChart = new Chart(consumptionVsProductionCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Production (kWh)',
                    data: [420, 480, 520, 580, 620, 650, 680, 670, 630, 590, 510, 450],
                    backgroundColor: '#0ea5e9'
                },
                {
                    label: 'Consumption (kWh)',
                    data: [380, 400, 420, 410, 430, 450, 470, 460, 440, 430, 420, 400],
                    backgroundColor: '#ef4444'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'kWh'
                    }
                }
            }
        }
    });
    
    // Alert drawer functionality
    const alertToggle = document.getElementById('alertToggle');
    const notificationBell = document.getElementById('notificationBell');
    const alertsBtn = document.getElementById('alertsBtn');
    const alertDrawer = document.getElementById('alertDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    // Function to toggle alert drawer
    function toggleDrawer() {
        alertDrawer.classList.toggle('open');
        // Stop the bell animation when drawer is opened
        notificationBell.querySelector('i').classList.remove('ringing');
    }
    
    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }
    
    // Add event listeners for all alert toggle elements
    alertToggle.addEventListener('click', toggleDrawer);
    notificationBell.addEventListener('click', toggleDrawer);
    alertsBtn.addEventListener('click', toggleDrawer);
    closeDrawer.addEventListener('click', toggleDrawer);
    menuToggle.addEventListener('click', toggleSidebar);
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section') + '-section';
            document.getElementById(sectionId).classList.add('active');
            
            // Close sidebar on mobile after selection
            if (window.innerWidth < 992) {
                sidebar.classList.remove('open');
            }
        });
    });
    
    // Settings menu functionality
    const settingsItems = document.querySelectorAll('.settings-item');
    settingsItems.forEach(item => {
        item.addEventListener('click', function() {
            settingsItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Help menu functionality
    const helpItems = document.querySelectorAll('.help-item');
    helpItems.forEach(item => {
        item.addEventListener('click', function() {
            helpItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Make the bell icon ring when there are new alerts
    function ringBell() {
        notificationBell.querySelector('i').classList.add('ringing');
        
        // Stop ringing after 4 seconds
        setTimeout(() => {
            notificationBell.querySelector('i').classList.remove('ringing');
        }, 4000);
    }
    
    // Ring the bell on page load to simulate new alerts
    setTimeout(ringBell, 2000);
    
    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateStr = now.toLocaleDateString('en-US', options);
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        document.querySelector('.date-display').textContent = `${dateStr} | ${timeStr}`;
        
        // Update footer time
        const footerTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.querySelector('.footer .system-status').innerHTML = 
            `System Status: <strong>Normal Operation</strong> | Last Updated: ${footerTime}`;
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Export button functionality
    document.getElementById('exportBtn').addEventListener('click', function() {
        alert('Exporting daily report as CSV...');
        // In a real application, this would trigger a download
    });
    
    // Simulate live data updates
    setInterval(function() {
        // Randomly update some values to simulate live data
        const socElement = document.querySelector('.column:nth-child(2) .metric-value');
        if (socElement) {
            const currentSoc = parseInt(socElement.textContent);
            const newSoc = Math.max(30, Math.min(100, currentSoc + (Math.random() > 0.5 ? 1 : -1)));
            socElement.textContent = newSoc;
        }
        
        const pvPowerElement = document.querySelector('.column:nth-child(1) .metric-value');
        if (pvPowerElement) {
            const currentPv = parseFloat(pvPowerElement.textContent);
            const newPv = Math.max(0, Math.min(5, currentPv + (Math.random() - 0.5) * 0.2)).toFixed(1);
            pvPowerElement.textContent = newPv;
        }
        
        // Add a new log entry occasionally
        if (Math.random() > 0.7) {
            const actionsLog = document.querySelector('.actions-log');
            if (actionsLog) {
                const now = new Date();
                const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                
                const logEntries = [
                    `System check completed`,
                    `Data synchronized with cloud`,
                    `Performance report generated`,
                    `Weather data updated`
                ];
                
                const randomEntry = logEntries[Math.floor(Math.random() * logEntries.length)];
                
                const newLogEntry = document.createElement('div');
                newLogEntry.className = 'log-entry';
                newLogEntry.innerHTML = `
                    <div class="log-time">${timeStr}</div>
                    <div class="log-content">${randomEntry}</div>
                `;
                
                // Add to top of log
                actionsLog.insertBefore(newLogEntry, actionsLog.firstChild);
                
                // Remove oldest entry if more than 5
                if (actionsLog.children.length > 5) {
                    actionsLog.removeChild(actionsLog.lastChild);
                }
                
                // Ring the bell for important notifications
                if (Math.random() > 0.5) {
                    ringBell();
                }
            }
        }
    }, 5000);
});