<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSettingResource\Pages;
use App\Models\SiteSetting;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Tables;
use Filament\Tables\Table;

class SiteSettingResource extends Resource
{
    protected static ?string $model = SiteSetting::class;

    protected static \BackedEnum|string|null $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static \UnitEnum|string|null $navigationGroup = 'Configuration';

    public static function canCreate(): bool
    {
        return SiteSetting::count() < 1;
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('General Information')
                    ->schema([
                        Forms\Components\TextInput::make('site_name')
                            ->required()
                            ->maxLength(255),
                        Forms\Components\Textarea::make('site_description')
                            ->rows(3),
                    ]),
                Section::make('Branding & Files')
                    ->schema([
                        Forms\Components\FileUpload::make('logo')
                            ->disk('public')
                            ->directory('settings'),
                        Forms\Components\FileUpload::make('favicon')
                            ->disk('public')
                            ->directory('settings'),
                        Forms\Components\FileUpload::make('cv_file')
                            ->disk('public')
                            ->directory('cv'),
                    ])->columns(3),
                Section::make('Contact Details')
                    ->schema([
                        Forms\Components\TextInput::make('email')
                            ->email(),
                        Forms\Components\TextInput::make('phone'),
                        Forms\Components\Textarea::make('address')
                            ->rows(2),
                    ])->columns(2),
                Section::make('Social Links (Fallback)')
                    ->schema([
                        Forms\Components\TextInput::make('github_url')->url(),
                        Forms\Components\TextInput::make('linkedin_url')->url(),
                        Forms\Components\TextInput::make('instagram_url')->url(),
                        Forms\Components\TextInput::make('whatsapp_url')->url(),
                    ])->columns(2),
                Section::make('SEO Configuration')
                    ->schema([
                        Forms\Components\TextInput::make('seo_title'),
                        Forms\Components\Textarea::make('seo_description')->rows(2),
                        Forms\Components\Textarea::make('seo_keywords')->rows(2),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('site_name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('phone'),
                Tables\Columns\TextColumn::make('updated_at')->dateTime()->sortable(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSiteSettings::route('/'),
            'create' => Pages\CreateSiteSetting::route('/create'),
            'edit' => Pages\EditSiteSetting::route('/{record}/edit'),
        ];
    }
}
