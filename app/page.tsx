'use client';

import { useState } from 'react';
import { Phone, Truck, Trash2, Building2, Chrome as HomeIcon, Package, Calculator, CircleCheck as CheckCircle, Star, MapPin, Mail, MessageCircle, Container } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [wasteType, setWasteType] = useState('');
  const [volume, setVolume] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!wasteType || !volume) return;

    const basePrice = wasteType === 'construction' ? 300 :
                     wasteType === 'household' ? 200 :
                     wasteType === 'office' ? 250 : 200;

    const volumeNum = parseFloat(volume);
    const price = basePrice * volumeNum;
    setCalculatedPrice(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Title</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+79210900858" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
              <Phone className="h-5 w-5" />
              <span className="font-semibold hidden md:inline">+7 (921) 090-08-58</span>
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Вывоз мусора в Санкт-Петербурге
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Профессиональный вывоз строительного, бытового и офисного мусора. Собственный автопарк из 35 машин.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Calculator className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/6252434/pexels-photo-6252434.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Контейнер ПУХТО для строительного мусора"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Вывоз мусора"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Контейнер для мусора"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.pexels.com/photos/2764947/pexels-photo-2764947.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Грузовик для вывоза мусора"
                  className="rounded-lg shadow-2xl w-full h-48 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '35+', label: 'Машин в автопарке' },
              { number: '8-22', label: 'Часы работы' },
              { number: '6-36', label: 'Объем контейнеров м³' },
              { number: '100%', label: 'Экологичность' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг по вывозу отходов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: 'Строительный мусор',
                description: 'Вывоз строительных отходов, бетона, кирпича, штукатурки после ремонта или демонтажа',
                features: ['Контейнеры 6-36 м³', 'Быстрая подача', 'Помощь в загрузке'],
                image: 'https://images.pexels.com/photos/6252434/pexels-photo-6252434.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: HomeIcon,
                title: 'Бытовой мусор',
                description: 'Вывоз бытовых отходов из квартир, домов, дач и садовых участков',
                features: ['Мебель и техника', 'Вывоз хлама', 'Уборка территории'],
                image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Package,
                title: 'Офисный мусор',
                description: 'Вывоз офисных отходов, мебели, оргтехники и архивов',
                features: ['Переезд офиса', 'Утилизация документов', 'Регулярный вывоз'],
                image: 'https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Container,
                title: 'Аренда контейнеров ПУХТО',
                description: 'Предоставление контейнеров ПУХТО различного объема для сбора отходов',
                features: ['От 6 до 36 м³', 'Гибкие сроки', 'Доставка и вывоз'],
                image: 'https://images.pexels.com/photos/7256042/pexels-photo-7256042.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Trash2,
                title: 'Вывоз на утилизацию',
                description: 'Легальная утилизация всех видов отходов с предоставлением документов',
                features: ['Экологичность', 'Документы', 'Сертификаты'],
                image: 'https://images.pexels.com/photos/2764947/pexels-photo-2764947.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                icon: Truck,
                title: 'Транспортировка',
                description: 'Транспортировка грузов самосвалами и бортовыми машинами',
                features: ['Любые районы', 'Быстрая подача', 'Опытные водители'],
                image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition border-t-4 border-t-blue-600 overflow-hidden">
                {service.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-gray-600">Рассчитайте примерную стоимость вывоза мусора</p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="waste-type" className="text-base">Тип мусора</Label>
                    <Select value={wasteType} onValueChange={setWasteType}>
                      <SelectTrigger id="waste-type" className="mt-2">
                        <SelectValue placeholder="Выберите тип мусора" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Строительный мусор</SelectItem>
                        <SelectItem value="household">Бытовой мусор</SelectItem>
                        <SelectItem value="office">Офисный мусор</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-base">Объем (м³)</Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="Введите объем"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="mt-2"
                      min="1"
                    />
                  </div>

                  <Button
                    onClick={calculatePrice}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    Рассчитать стоимость
                  </Button>

                  {calculatedPrice !== null && (
                    <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
                      <p className="text-gray-600 mb-2">Примерная стоимость:</p>
                      <p className="text-4xl font-bold text-blue-600">{calculatedPrice} ₽</p>
                      <p className="text-sm text-gray-500 mt-2">Точную стоимость уточняйте у менеджера</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: 'Собственный автопарк',
                description: '35 единиц техники различной грузоподъемности'
              },
              {
                icon: CheckCircle,
                title: 'Легальная утилизация',
                description: 'Все документы и сертификаты об утилизации'
              },
              {
                icon: Phone,
                title: 'Быстрая подача',
                description: 'Подача машины в течение 1-2 часов'
              },
              {
                icon: Star,
                title: 'Опытные специалисты',
                description: 'Профессиональные водители и грузчики'
              }
            ].map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition">
                <CardContent className="p-8">
                  <advantage.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Александр М.',
                text: 'Отличная компания! Вывезли весь строительный мусор после ремонта квартиры. Приехали вовремя, работали быстро и аккуратно.',
                rating: 5
              },
              {
                name: 'Елена П.',
                text: 'Заказывали контейнер для дачи. Все четко, без задержек. Цены адекватные, персонал вежливый. Рекомендую!',
                rating: 5
              },
              {
                name: 'Дмитрий К.',
                text: 'Пользуемся услугами на регулярной основе для нашего офиса. Всегда все вовремя, никаких проблем. Спасибо!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-blue-100">Закажите вывоз мусора или получите консультацию</p>
            </div>

            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите ваш заказ или вопрос"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-white">Title</span>
              </div>
              <p className="text-sm">
                Профессиональный вывоз мусора в Санкт-Петербурге и Ленинградской области
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li>Вывоз строительного мусора</li>
                <li>Вывоз бытового мусора</li>
                <li>Вывоз офисного мусора</li>
                <li>Аренда контейнеров</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="tel:+79210900858" className="hover:text-blue-400">+7 (921) 090-08-58</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@berkana.spb.ru" className="hover:text-blue-400">info@berkana.spb.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Индустриальный пр. 44/2, офис 527, Санкт-Петербург</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Режим работы</h3>
              <p className="text-sm mb-4">Ежедневно: 8:00 - 22:00</p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 hover:bg-gray-800">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Беркана. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
