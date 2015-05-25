<?php
/*
 * This file is part of the TranslationLoaderBundle package.
 *
 * (c) Marc Aschmann <maschmann@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Asm\TranslationLoaderBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class TranslationType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('transLocale', 'text', array('required' => true))
            ->add('messageDomain', 'text', array('required' => true))
            ->add('transKey', 'text', array('required' => true))
            ->add('translation', 'textarea')
            ->add('save', 'submit');
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => 'Asm\TranslationLoaderBundle\Entity\Translation',
            )
        );
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'asm_translation';
    }
}
